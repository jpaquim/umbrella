<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/strings](https://media.thi.ng/umbrella/banners-20220914/thing-strings.svg?41f4988c)

[![npm version](https://img.shields.io/npm/v/@thi.ng/strings.svg)](https://www.npmjs.com/package/@thi.ng/strings)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/strings.svg)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109331703950160316?domain=https%3A%2F%2Fmastodon.thi.ng&style=social)](https://mastodon.thi.ng/@toxi)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

- [About](#about)
  - [General](#general)
  - [Numeric formatters](#numeric-formatters)
  - [Casing](#casing)
  - [Slugify](#slugify)
  - [ANSI](#ansi)
  - [Word wrapping](#word-wrapping)
  - [Padding / wrapping](#padding--wrapping)
  - [Indentation](#indentation)
  - [Char range presets / lookup tables](#char-range-presets--lookup-tables)
  - [Units](#units)
  - [Miscellaneous](#miscellaneous)
- [Status](#status)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage examples](#usage-examples)
- [API](#api)
  - [Basic usage examples](#basic-usage-examples)
- [Authors](#authors)
- [License](#license)

## About

Various (~100) string formatting, word wrapping & utility functions, some
higher-order, some memoized.

Partially based on Clojure version of [thi.ng/strf](http://thi.ng/strf).

### General

- `defFormat` / `format`
- `interpolate` / `interpolateKeys`
- `escape` / `unescape`
- `join` / `splice` / `split`
- `repeat`
- `stringify`

### Numeric formatters

- `currency` / `chf` / `eur` / `gpb` / `usd` / `yen`
- `radix`
- `int` / `intLocale`
- `float` / `floatFixedWidth`
- `maybeParseFloat` / `maybeParseInt`
- `percent`
- `uuid`
- `vector`
- `B8` / `B16` / `B32` - fixed size binary formatters
- `U8` / `U16` / `U24` / `U32` / `U64` - fixed size hex formatters
- `Z2` / `Z3` / `Z4` - fixed sized zero padded number formatters

### Casing

- `lower` / `upper` / `capitalize`
- `camel` / `kebab` / `snake` / `upperSnake`

### Slugify

- `slugify` / `slugifyGH`

### ANSI

- `isAnsi` / `isAnsiEnd` / `isAnsiStart`
- `stripAnsi`
- `lengthAnsi`

### Word wrapping

- `wordWrap` / `wordWrapLine` / `wordWrapLines`
- `SPLIT_PLAIN` / `SPLIT_ANSI`

### Padding / wrapping

- `center`
- `padLeft` / `padRight`
- `truncate` / `truncateLeft` / `truncateRight`
- `trim`
- `wrap`

### Indentation

- `spacesToTabs` / `spacesToTabsLine`
- `tabsToSpaces` / `tabsToSpacesLine`

### Char range presets / lookup tables

- `charRange`
- `ALPHA` / `ALPHA_NUM` / `DIGITS` / `LOWER` / `UPPER` / `HEX`
- `BOM` / `ESCAPES` / `ESCAPES_REV`
- `WS` / `PUNCTUATION`

### Units

- `units`
- `bits` / `bytes`
- `grams`
- `meters`
- `seconds`
- `ruler` / `grid`

### Miscellaneous

- `hstr` - [Hollerith strings](https://en.wikipedia.org/wiki/Hollerith_constant)
- `computeCursorPos`

## Status

**STABLE** - used in production

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bstrings%5D+in%3Atitle)

## Installation

```bash
pnpm i @thi.ng/strings
```

ES module import:

```html
<script type="module" src="https://cdn.skypack.dev/@thi.ng/strings"></script>
```

[Skypack documentation](https://docs.skypack.dev/)

For Node.js REPL:

```js
const strings = await import("@thi.ng/strings");
```

Package sizes (brotli'd, pre-treeshake): ESM: 4.62 KB

## Dependencies

- [@thi.ng/api](https://github.com/thi-ng/umbrella/tree/develop/packages/api)
- [@thi.ng/errors](https://github.com/thi-ng/umbrella/tree/develop/packages/errors)
- [@thi.ng/hex](https://github.com/thi-ng/umbrella/tree/develop/packages/hex)
- [@thi.ng/memoize](https://github.com/thi-ng/umbrella/tree/develop/packages/memoize)

## Usage examples

Several demos in this repo's
[/examples](https://github.com/thi-ng/umbrella/tree/develop/examples)
directory are using this package.

A selection:

| Screenshot                                                                                                                 | Description                                                            | Live demo                                                 | Source                                                                                 |
|:---------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|:----------------------------------------------------------|:---------------------------------------------------------------------------------------|
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/big-font.png" width="240"/>            | Large ASCII font text generator using @thi.ng/rdom                     | [Demo](https://demo.thi.ng/umbrella/big-font/)            | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/big-font)            |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/crypto-chart.png" width="240"/>        | Basic crypto-currency candle chart with multiple moving averages plots | [Demo](https://demo.thi.ng/umbrella/crypto-chart/)        | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/crypto-chart)        |
|                                                                                                                            | Basic SPA example with atom-based UI router                            | [Demo](https://demo.thi.ng/umbrella/login-form/)          | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/login-form)          |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/rstream-spreadsheet.png" width="240"/> | rstream based spreadsheet w/ S-expression formula DSL                  | [Demo](https://demo.thi.ng/umbrella/rstream-spreadsheet/) | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/rstream-spreadsheet) |
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/xml-converter.png" width="240"/>       | XML/HTML/SVG to hiccup/JS conversion                                   | [Demo](https://demo.thi.ng/umbrella/xml-converter/)       | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/xml-converter)       |

## API

[Generated API docs](https://docs.thi.ng/umbrella/strings/)

### Basic usage examples

```ts
// create a custom string formatter
const fmt = defFormat([
    "Price: ",
    { usd: "$", gbp: "£", eur: "€" },
    float(2),
    " (",
    percent(2),
    " off)"
]);

// use format
fmt("usd", 1.2345, 0.5);
// Price: $1.23 (50.00% off)

fmt("eur", 1.2345, 0.25)
// Price: €1.23 (25.00% off)
```

## Authors

- [Karsten Schmidt](https://thi.ng)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-strings,
  title = "@thi.ng/strings",
  author = "Karsten Schmidt",
  note = "https://thi.ng/strings",
  year = 2015
}
```

## License

&copy; 2015 - 2023 Karsten Schmidt // Apache License 2.0
