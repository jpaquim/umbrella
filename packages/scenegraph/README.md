<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/scenegraph](https://media.thi.ng/umbrella/banners-20220914/thing-scenegraph.svg?b46c4533)

[![npm version](https://img.shields.io/npm/v/@thi.ng/scenegraph.svg)](https://www.npmjs.com/package/@thi.ng/scenegraph)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/scenegraph.svg)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109331703950160316?domain=https%3A%2F%2Fmastodon.thi.ng&style=social)](https://mastodon.thi.ng/@toxi)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

- [About](#about)
- [Status](#status)
- [Related packages](#related-packages)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage examples](#usage-examples)
- [API](#api)
- [Authors](#authors)
- [License](#license)

## About

Extensible 2D/3D scene graph with [@thi.ng/hiccup-canvas](https://github.com/thi-ng/umbrella/tree/develop/packages/hiccup-canvas) support.

## Status

**ALPHA** - bleeding edge / work-in-progress

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bscenegraph%5D+in%3Atitle)

## Related packages

- [@thi.ng/hdom-canvas](https://github.com/thi-ng/umbrella/tree/develop/packages/hdom-canvas) - [@thi.ng/hdom](https://github.com/thi-ng/umbrella/tree/develop/packages/hdom) component wrapper for declarative canvas scenegraphs
- [@thi.ng/hiccup](https://github.com/thi-ng/umbrella/tree/develop/packages/hiccup) - HTML/SVG/XML serialization of nested data structures, iterables & closures
- [@thi.ng/hiccup-canvas](https://github.com/thi-ng/umbrella/tree/develop/packages/hiccup-canvas) - Hiccup shape tree renderer for vanilla Canvas 2D contexts
- [@thi.ng/hiccup-svg](https://github.com/thi-ng/umbrella/tree/develop/packages/hiccup-svg) - SVG element functions for [@thi.ng/hiccup](https://github.com/thi-ng/umbrella/tree/develop/packages/hiccup) & related tooling
- [@thi.ng/rdom-canvas](https://github.com/thi-ng/umbrella/tree/develop/packages/rdom-canvas) - [@thi.ng/rdom](https://github.com/thi-ng/umbrella/tree/develop/packages/rdom) component wrapper for [@thi.ng/hiccup-canvas](https://github.com/thi-ng/umbrella/tree/develop/packages/hiccup-canvas) and declarative canvas drawing

## Installation

```bash
pnpm i @thi.ng/scenegraph
```

ES module import:

```html
<script type="module" src="https://cdn.skypack.dev/@thi.ng/scenegraph"></script>
```

[Skypack documentation](https://docs.skypack.dev/)

For Node.js REPL:

```js
const scenegraph = await import("@thi.ng/scenegraph");
```

Package sizes (brotli'd, pre-treeshake): ESM: 858 bytes

## Dependencies

- [@thi.ng/api](https://github.com/thi-ng/umbrella/tree/develop/packages/api)
- [@thi.ng/checks](https://github.com/thi-ng/umbrella/tree/develop/packages/checks)
- [@thi.ng/errors](https://github.com/thi-ng/umbrella/tree/develop/packages/errors)
- [@thi.ng/matrices](https://github.com/thi-ng/umbrella/tree/develop/packages/matrices)
- [@thi.ng/vectors](https://github.com/thi-ng/umbrella/tree/develop/packages/vectors)

## Usage examples

Several demos in this repo's
[/examples](https://github.com/thi-ng/umbrella/tree/develop/examples)
directory are using this package.

A selection:

| Screenshot                                                                                                              | Description                                           | Live demo                                              | Source                                                                              |
|:------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-------------------------------------------------------|:------------------------------------------------------------------------------------|
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/scenegraph.png" width="240"/>       | 2D scenegraph & shape picking                         | [Demo](https://demo.thi.ng/umbrella/scenegraph/)       | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/scenegraph)       |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/scenegraph-image.png" width="240"/> | 2D scenegraph & image map based geometry manipulation | [Demo](https://demo.thi.ng/umbrella/scenegraph-image/) | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/scenegraph-image) |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/shader-graph.jpg" width="240"/>     | Minimal shader graph developed during livestream #2   | [Demo](https://demo.thi.ng/umbrella/shader-graph/)     | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/shader-graph)     |

## API

[Generated API docs](https://docs.thi.ng/umbrella/scenegraph/)

TODO

## Authors

- [Karsten Schmidt](https://thi.ng)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-scenegraph,
  title = "@thi.ng/scenegraph",
  author = "Karsten Schmidt",
  note = "https://thi.ng/scenegraph",
  year = 2016
}
```

## License

&copy; 2016 - 2023 Karsten Schmidt // Apache License 2.0
