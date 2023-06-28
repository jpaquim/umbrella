<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/bitfield](https://media.thi.ng/umbrella/banners-20220914/thing-bitfield.svg?d320c323)

[![npm version](https://img.shields.io/npm/v/@thi.ng/bitfield.svg)](https://www.npmjs.com/package/@thi.ng/bitfield)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/bitfield.svg)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109331703950160316?domain=https%3A%2F%2Fmastodon.thi.ng&style=social)](https://mastodon.thi.ng/@toxi)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

- [About](#about)
- [Status](#status)
- [Related packages](#related-packages)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [API](#api)
- [Authors](#authors)
- [License](#license)

## About

1D / 2D bit field implementations.

All implementations are backed by typed arrays. Due to `Uint32Array`
backing the width is always rounded to a multiple of 32.

## Status

**STABLE** - used in production

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bbitfield%5D+in%3Atitle)

## Related packages

- [@thi.ng/adjacency](https://github.com/thi-ng/umbrella/tree/develop/packages/adjacency) - Sparse & bitwise adjacency matrices, lists and selected traversal algorithms for directed & undirected graphs

## Installation

```bash
pnpm i @thi.ng/bitfield
```

ES module import:

```html
<script type="module" src="https://cdn.skypack.dev/@thi.ng/bitfield"></script>
```

[Skypack documentation](https://docs.skypack.dev/)

For Node.js REPL:

```js
const bitfield = await import("@thi.ng/bitfield");
```

Package sizes (brotli'd, pre-treeshake): ESM: 1.18 KB

## Dependencies

- [@thi.ng/api](https://github.com/thi-ng/umbrella/tree/develop/packages/api)
- [@thi.ng/binary](https://github.com/thi-ng/umbrella/tree/develop/packages/binary)
- [@thi.ng/errors](https://github.com/thi-ng/umbrella/tree/develop/packages/errors)
- [@thi.ng/strings](https://github.com/thi-ng/umbrella/tree/develop/packages/strings)

## API

[Generated API docs](https://docs.thi.ng/umbrella/bitfield/)

```ts
import { BitField, BitMatrix } from "@thi.ng/bitfield";

// size always rounded up to a multiple of 32
const field = new BitField(16);

field.setAt(0);

// if 2nd arg is false, the bit will be cleared
// setAt returns non-zero value if bit was previously set
field.setAt(31, true);
// 0

// returns non-zero value if bit is set
field.at(0)
// -2147483648

field.at(1)
// 0

field.toString();
// 10000000000000000000000000000001

field.resize(64)
// 1000000000000000000000000000000100000000000000000000000000000000

const mat = new BitMatrix(8, 32);
for(let i = 0; i < 8; i++) mat.setAt(i, i);

mat.at(7, 7);
// 16777216

mat.toString();
// 10000000000000000000000000000000
// 01000000000000000000000000000000
// 00100000000000000000000000000000
// 00010000000000000000000000000000
// 00001000000000000000000000000000
// 00000100000000000000000000000000
// 00000010000000000000000000000000
// 00000001000000000000000000000000
```

## Authors

- [Karsten Schmidt](https://thi.ng)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-bitfield,
  title = "@thi.ng/bitfield",
  author = "Karsten Schmidt",
  note = "https://thi.ng/bitfield",
  year = 2016
}
```

## License

&copy; 2016 - 2023 Karsten Schmidt // Apache License 2.0
