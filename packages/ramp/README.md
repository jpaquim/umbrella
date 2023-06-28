<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/ramp](https://media.thi.ng/umbrella/banners-20220914/thing-ramp.svg?4bf9a6f2)

[![npm version](https://img.shields.io/npm/v/@thi.ng/ramp.svg)](https://www.npmjs.com/package/@thi.ng/ramp)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/ramp.svg)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109331703950160316?domain=https%3A%2F%2Fmastodon.thi.ng&style=social)](https://mastodon.thi.ng/@toxi)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

- [About](#about)
- [Status](#status)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage examples](#usage-examples)
- [API](#api)
- [Authors](#authors)
- [License](#license)

## About

Parametric (non-)linearly interpolated 1D lookup tables for remapping values.

![screenshot](https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/ramp/readme.png)

## Status

**STABLE** - used in production

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bramp%5D+in%3Atitle)

## Installation

```bash
pnpm i @thi.ng/ramp
```

ES module import:

```html
<script type="module" src="https://cdn.skypack.dev/@thi.ng/ramp"></script>
```

[Skypack documentation](https://docs.skypack.dev/)

For Node.js REPL:

```js
const ramp = await import("@thi.ng/ramp");
```

Package sizes (brotli'd, pre-treeshake): ESM: 992 bytes

## Dependencies

- [@thi.ng/arrays](https://github.com/thi-ng/umbrella/tree/develop/packages/arrays)
- [@thi.ng/compare](https://github.com/thi-ng/umbrella/tree/develop/packages/compare)
- [@thi.ng/math](https://github.com/thi-ng/umbrella/tree/develop/packages/math)
- [@thi.ng/transducers](https://github.com/thi-ng/umbrella/tree/develop/packages/transducers)
- [@thi.ng/vectors](https://github.com/thi-ng/umbrella/tree/develop/packages/vectors)

## Usage examples

Several demos in this repo's
[/examples](https://github.com/thi-ng/umbrella/tree/develop/examples)
directory are using this package.

A selection:

| Screenshot                                                                                                        | Description                                 | Live demo                                        | Source                                                                        |
|:------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|:-------------------------------------------------|:------------------------------------------------------------------------------|
| <img src="https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/examples/ramp-synth.png" width="240"/> | Unison wavetable synth with waveform editor | [Demo](https://demo.thi.ng/umbrella/ramp-synth/) | [Source](https://github.com/thi-ng/umbrella/tree/develop/examples/ramp-synth) |

## API

[Generated API docs](https://docs.thi.ng/umbrella/ramp/)

```ts
import { linear, hermite } from "@thi.ng/ramp";

const rampL = linear([[0.1, 0], [0.5, 1], [0.9, 0]]);
const rampH = hermite([[0.1, 0], [0.5, 1], [0.9, 0]]);

for(let i = 0; i <= 10; i++) {
    console.log(
        i / 10,
        rampL.at(i / 10).toFixed(2),
        rampH.at(i / 10).toFixed(2)
    );
}

// 0   0.00 0.00
// 0.1 0.00 0.00
// 0.2 0.25 0.16
// 0.3 0.50 0.50
// 0.4 0.75 0.84
// 0.5 1.00 1.00
// 0.6 0.75 0.84
// 0.7 0.50 0.50
// 0.8 0.25 0.16
// 0.9 0.00 0.00
// 1   0.00 0.00
```

## Authors

- [Karsten Schmidt](https://thi.ng)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-ramp,
  title = "@thi.ng/ramp",
  author = "Karsten Schmidt",
  note = "https://thi.ng/ramp",
  year = 2019
}
```

## License

&copy; 2019 - 2023 Karsten Schmidt // Apache License 2.0
