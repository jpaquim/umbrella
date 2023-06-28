<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/diff](https://media.thi.ng/umbrella/banners-20220914/thing-diff.svg?d748f0c3)

[![npm version](https://img.shields.io/npm/v/@thi.ng/diff.svg)](https://www.npmjs.com/package/@thi.ng/diff)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/diff.svg)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109331703950160316?domain=https%3A%2F%2Fmastodon.thi.ng&style=social)](https://mastodon.thi.ng/@toxi)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

- [About](#about)
- [Status](#status)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [API](#api)
- [Authors](#authors)
- [License](#license)

## About

Customizable diff implementations for arrays (sequential) & objects (associative), with or without linear edit logs.

## Status

**STABLE** - used in production

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bdiff%5D+in%3Atitle)

## Installation

```bash
pnpm i @thi.ng/diff
```

ES module import:

```html
<script type="module" src="https://cdn.skypack.dev/@thi.ng/diff"></script>
```

[Skypack documentation](https://docs.skypack.dev/)

For Node.js REPL:

```js
const diff = await import("@thi.ng/diff");
```

Package sizes (brotli'd, pre-treeshake): ESM: 1.05 KB

## Dependencies

- [@thi.ng/api](https://github.com/thi-ng/umbrella/tree/develop/packages/api)
- [@thi.ng/equiv](https://github.com/thi-ng/umbrella/tree/develop/packages/equiv)

## API

[Generated API docs](https://docs.thi.ng/umbrella/diff/)

```ts
import { diffArray } from "@thi.ng/diff";

// diff w/ default diff mode
diffArray([1, 2, 3], [1, 2, 4], "full");
// {
//     distance: 2,
//     adds: { 2: 4 },
//     dels: { 2: 3 },
//     const: { 0: 1, 1: 2 },
//     linear: [0, 0, 1,  0, 1, 2,  -1, 2, 3,  1, 2, 4]
// }
```

## Authors

- [Karsten Schmidt](https://thi.ng)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-diff,
  title = "@thi.ng/diff",
  author = "Karsten Schmidt",
  note = "https://thi.ng/diff",
  year = 2016
}
```

## License

&copy; 2016 - 2023 Karsten Schmidt // Apache License 2.0
