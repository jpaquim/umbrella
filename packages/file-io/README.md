<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/file-io](https://media.thi.ng/umbrella/banners-20220914/thing-file-io.svg?86fa755f)

[![npm version](https://img.shields.io/npm/v/@thi.ng/file-io.svg)](https://www.npmjs.com/package/@thi.ng/file-io)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/file-io.svg)
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

Assorted file I/O utils (with logging support) for NodeJS.

Most functions in this package have optional support for the
[`ILogger`](https://github.com/thi-ng/umbrella/tree/develop/packages/logger)
logging interface.

## Status

**STABLE** - used in production

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bfile-io%5D+in%3Atitle)

## Installation

```bash
pnpm i @thi.ng/file-io
```

For Node.js REPL:

```js
const fileIo = await import("@thi.ng/file-io");
```

Package sizes (brotli'd, pre-treeshake): ESM: 1.25 KB

## Dependencies

- [@thi.ng/api](https://github.com/thi-ng/umbrella/tree/develop/packages/api)
- [@thi.ng/checks](https://github.com/thi-ng/umbrella/tree/develop/packages/checks)
- [@thi.ng/hex](https://github.com/thi-ng/umbrella/tree/develop/packages/hex)
- [@thi.ng/logger](https://github.com/thi-ng/umbrella/tree/develop/packages/logger)
- [@thi.ng/random](https://github.com/thi-ng/umbrella/tree/develop/packages/random)

## API

[Generated API docs](https://docs.thi.ng/umbrella/file-io/)

TODO

## Authors

- [Karsten Schmidt](https://thi.ng)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-file-io,
  title = "@thi.ng/file-io",
  author = "Karsten Schmidt",
  note = "https://thi.ng/file-io",
  year = 2022
}
```

## License

&copy; 2022 - 2023 Karsten Schmidt // Apache License 2.0
