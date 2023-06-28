<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/wasm-api-dom](https://media.thi.ng/umbrella/banners-20220914/thing-wasm-api-dom.svg?2d6e3998)

[![npm version](https://img.shields.io/npm/v/@thi.ng/wasm-api-dom.svg)](https://www.npmjs.com/package/@thi.ng/wasm-api-dom)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/wasm-api-dom.svg)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109331703950160316?domain=https%3A%2F%2Fmastodon.thi.ng&style=social)](https://mastodon.thi.ng/@toxi)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

- [About](#about)
  - [Module initialization](#module-initialization)
  - [ID handles](#id-handles)
  - [DOM tree creation](#dom-tree-creation)
  - [Attribute creation & accessors](#attribute-creation--accessors)
  - [Event listeners](#event-listeners)
- [Status](#status)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage examples](#usage-examples)
- [API](#api)
- [Authors](#authors)
- [License](#license)

## About

Browser DOM bridge API for hybrid TypeScript & WASM (Zig) applications. This is a support package for [@thi.ng/wasm-api](https://github.com/thi-ng/umbrella/tree/develop/packages/wasm-api).

This package provides a small TypeScript core API
and related [Ziglang](https://ziglang.org) bindings for UI & DOM
creation/manipulation via WebAssembly.

Current key features for the Zig (WASM) side:

- Fully declarative or imperative DOM tree creation & manipulation
- ID handle management for WASM created DOM elements & listeners
- Canvas element creation (with HDPI support, see
  [@thi.ng/adapt-dpi](https://github.com/thi-ng/umbrella/blob/develop/packages/adapt-dpi))
- Attribute setters/getters (string, numeric, boolean)
- `.innerHTML` & `.innerText` setters
- Event handlers, event types (see generated types in [api.zig](https://github.com/thi-ng/umbrella/blob/develop/packages/wasm-api-dom/zig/api.zig) for details):
    - drag 'n drop (WIP)
    - focus
    - input
    - key
    - mouse
    - pointer
    - scroll
    - touch
    - wheel
- Fullscreen API wrapper
- (Browser) window info queries

### Module initialization

Before the Zig WASM API module can be used, it must be initialized
(automatically or manually) with a standard `std.mem.Allocator`. The current
recommended pattern looks something like this:

```zig
const std = @import("std");
const wasm = @import("wasm-api");
const dom = @import("wasm-api-dom");

// expose thi.ng/wasm-api core API (incl. panic handler & allocation fns)
pub usingnamespace wasm;

// allocator, also exposed & used by JS-side WasmBridge & DOM module
// see further comments in:
// https://github.com/thi-ng/umbrella/blob/develop/packages/wasm-api/zig/lib.zig
// https://github.com/thi-ng/umbrella/blob/develop/packages/wasm-api-dom/zig/events.zig
var gpa = std.heap.GeneralPurposeAllocator(.{}){};
pub const WASM_ALLOCATOR = gpa.allocator();

/// Since various initialization functions can return errors
/// we're bundling them all in a single fn, which is then called by start()
/// and so only needs one code site for error handling
fn init() !void {
    // all WASM API modules auto-initialize themselves if the root source
    // file exposes a `WASM_ALLOCATOR`, otherwise you'll have to initialize manually:
    // try dom.init(customAllocator);

    // ...
}

/// Main entry point
export fn start() void {
    init() catch |e| @panic(@errorName(e));
}
```

### ID handles

Since DOM related resources created on the JS side cannot be returned to the
WASM module directly, the bridge API caches those on the host side and [uses
managed ID (integer)
handles](https://github.com/thi-ng/umbrella/blob/develop/packages/wasm-api/README.md#object-indices--handles)
to exchange them. These IDs can then be used in subsequent API calls to refer to
certain DOM elements, listeners etc.

For element & event related functionality the following IDs are reserved:

- `-1` the browser `window` itself
- `0` `document.head`
- `1` `document.body`

All are exposed in the Zig module as `window`, `head`, `body` constants to help
avoiding magic numbers in userland code.

### DOM tree creation

Single DOM elements and entire element trees (incl. event handler setup and
custom attributes) can be created via the `createElement()` function.

Attribute definitions need to be wrapped using `dom.attribs()` and child
elements via `dom.children()`, as shown here:

```zig
const dom = @import("wasm-api-dom");

const Attrib = dom.Attrib;

// snippet taken from the zig-todo-list example project

const handle = dom.createElement(&.{
    // element name
    .tag = "div",
    // CSS classes
    .class = "flex flex-column mb3",
    // nested child elements
    .children = dom.children(&.{
        .{ .tag = "h3", .text = "Add new task" },
        .{
            .tag = "input",
            // element's ID attribute
            .id = "newtask",
            // attribute & event listener definitions
            .attribs = dom.attribs(&.{
                Attrib.string("placeholder", "What needs to be done?"),
                Attrib.flag("autofocus", true),
                // event listener setup:
                // last arg is optional opaque pointer to arbitrary user state/context
                Attrib.event("keydown", onKeydown, &STATE),
                Attrib.event("input", onInput, null),
            }),
        },
        .{
            .tag = "button",
            // Element .innerText content
            .text = "Add Task",
            .attribs = dom.attribs(&.{
                Attrib.event("click", onAddTask, null),
            }),
        },
    }),
});
```

The
[CreateElementOpts](https://docs.thi.ng/umbrella/wasm-api-dom/interfaces/CreateElementOpts.html)
struct has some additional options and more are planned. All WIP!

### Attribute creation & accessors

As already shown above, attributes can be provided as part of the
`CreateElementOpts` and/or accessed imperatively:

Zig example:

```zig
// creating & configuring an <input type="range"> element
_ = dom.createElement(&.{
    .tag = "input",
    .parent = dom.body,
    // optional attrib declarations
    .attribs = dom.attribs(&.{
        // string attrib
        dom.Attrib.string("type", "range"),
        // numeric attribs
        dom.Attrib.number("min", 0),
        dom.Attrib.number("max", 100),
        dom.Attrib.number("step", 10),
        dom.Attrib.number("value", 20),
        // boolean attrib (only will be created if true)
        dom.Attrib.flag("disabled", true),
    }),
});
```

The following accessors are provided (see
[/zig/lib.zig](https://github.com/thi-ng/umbrella/blob/develop/packages/wasm-api-dom/zig/lib.zig)
for documentation):

- `getStringAttrib()` / `setStringAttrib()`
- `getNumericAttrib()` / `setNumericAttrib()`
- `getBooleanAttrib()` / `setBooleanAttrib()`

### Event listeners

Once a DOM element has been created, event listeners can be attached to it. All
listeners take two arguments: an `Event` struct and an optional opaque pointer
for passing arbitrary user context.

A more advanced version of the following click counter button component can be
seen in action in the
[zig-counter](https://github.com/thi-ng/umbrella/tree/develop/examples/zig-counter)
example project. Also check other supplied Zig examples for more realworld
[usage examples](#usage-examples).

```zig
const wasm = @import("wasm-api");
const dom = @import("wasm-api-dom");

/// Simple click counter component
const Counter = struct {
    elementID: i32,
    clicks: usize,
    step: usize,

    const Self = @This();

    /// Initialize internal state & DOM element w/ listener
    pub fn init(self: *Self, parent: i32, step: usize) !void {
        self.clicks = 0;
        self.step = step;
        // create DOM button element
        self.elementID = dom.createElement(&.{
            .tag = "button",
            // Tachyons CSS class names
            .class = "db w5 ma2 pa2 tc bn",
            .text = "click me!",
            .parent = parent,
            .attribs = dom.attribs(&.{
                // define & add click event listener w/ user context arg
                dom.Attrib.event("click", onClick, self),
            }),
        });
    }

    fn update(self: *const Self) void {
        // format new button label
        var buf: [32]u8 = undefined;
        var label = std.fmt.bufPrintZ(&buf, "clicks: {d:0>4}", .{self.clicks}) catch return;
        // update DOM element
        dom.setInnerText(self.elementID, label);
    }

    /// event listener & state update
    fn onClick(_: *const dom.Event, raw: ?*anyopaque) void {
        // safely cast raw pointer
        if (wasm.ptrCast(*Self, raw)) |self| {
            self.clicks += self.step;
            self.update();
        }
    }
};
```

## Status

**ALPHA** - bleeding edge / work-in-progress

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bwasm-api-dom%5D+in%3Atitle)

## Installation

```bash
pnpm i @thi.ng/wasm-api-dom
```

ES module import:

```html
<script type="module" src="https://cdn.skypack.dev/@thi.ng/wasm-api-dom"></script>
```

[Skypack documentation](https://docs.skypack.dev/)

For Node.js REPL:

```js
const wasmApiDom = await import("@thi.ng/wasm-api-dom");
```

Package sizes (brotli'd, pre-treeshake): ESM: 4.16 KB

## Dependencies

- [@thi.ng/adapt-dpi](https://github.com/thi-ng/umbrella/tree/develop/packages/adapt-dpi)
- [@thi.ng/api](https://github.com/thi-ng/umbrella/tree/develop/packages/api)
- [@thi.ng/errors](https://github.com/thi-ng/umbrella/tree/develop/packages/errors)
- [@thi.ng/prefixes](https://github.com/thi-ng/umbrella/tree/develop/packages/prefixes)
- [@thi.ng/wasm-api](https://github.com/thi-ng/umbrella/tree/develop/packages/wasm-api)

## Usage examples

Several demos in this repo's
[/examples](https://github.com/thi-ng/umbrella/tree/develop/examples)
directory are using this package.

A selection:

| Screenshot                                                                                                           | Description                                                        | Live demo                                           | Source                                                                           |
|:---------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------|:----------------------------------------------------|:---------------------------------------------------------------------------------|
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/zig-canvas.png" width="240"/>    | Zig-based DOM creation & canvas drawing app                        | [Demo](https://demo.thi.ng/umbrella/zig-canvas/)    | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/zig-canvas)    |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/zig-cellular.jpg" width="240"/>  | Zig-based 2D multi-behavior cellular automata                      | [Demo](https://demo.thi.ng/umbrella/zig-cellular/)  | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/zig-cellular)  |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/zig-counter.png" width="240"/>   | Simple Zig/WASM click counter DOM component                        | [Demo](https://demo.thi.ng/umbrella/zig-counter/)   | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/zig-counter)   |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/zig-todo-list.png" width="240"/> | Zig-based To-Do list, DOM creation, local storage task persistence | [Demo](https://demo.thi.ng/umbrella/zig-todo-list/) | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/zig-todo-list) |

## API

[Generated API docs](https://docs.thi.ng/umbrella/wasm-api-dom/)

For now, please see the [package
docs](https://docs.thi.ng/umbrella/wasm-api-dom/), source code comments
([TS](https://github.com/thi-ng/umbrella/tree/develop/packages/wasm-api-dom/src/)
&
[Zig](https://github.com/thi-ng/umbrella/tree/develop/packages/wasm-api-dom/zig/))
and the various comments in the above linked example projects for further
reference and usage patterns! Thank you!

## Authors

- [Karsten Schmidt](https://thi.ng) (Main author)
- [Marcus Wågberg](https://github.com/MarcusWagberg)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-wasm-api-dom,
  title = "@thi.ng/wasm-api-dom",
  author = "Karsten Schmidt and others",
  note = "https://thi.ng/wasm-api-dom",
  year = 2022
}
```

## License

&copy; 2022 - 2023 Karsten Schmidt // Apache License 2.0
