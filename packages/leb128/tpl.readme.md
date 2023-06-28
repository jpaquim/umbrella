<!-- include ../../assets/tpl/header.md -->

<!-- toc -->

## About

WASM based [Little Endian Base
128](https://en.wikipedia.org/wiki/LEB128) varint encoding / decoding,
supporting the full (u)int64 range.

The WASM binary (~860 bytes) is embedded as base64 string in the
TypeScript source to make it easier to use in both browser & node
environments. The source code of the actual implementation (written in
[Zig](https://ziglang.org)) is included in
[/zig/leb128.zig](https://github.com/thi-ng/umbrella/tree/develop/packages/leb128/zig/leb128.zig)

All public functions throw an error if the WASM module could not be
initialized.

References:

- https://en.wikipedia.org/wiki/LEB128
- http://webassembly.github.io/spec/core/binary/values.html#integers

## Breaking changes

v3.0.0 introduces JS `bigint` support and both decode functions return a tuple
of `[bigint, number]` with the `bigint` being the decoded value and the 2nd item
the number of bytes consumed. Simarly, the encode functions now accept a JS
number or bigint arg.

Furthermore, all values to be encoded/decoded are cast to i64/u64 range now.

{{meta.status}}

{{repo.supportPackages}}

{{repo.relatedPackages}}

{{meta.blogPosts}}

## Installation

{{pkg.install}}

{{pkg.size}}

## Dependencies

{{pkg.deps}}

{{repo.examples}}

## API

{{pkg.docs}}

```ts
import * as leb from "@thi.ng/leb128";

// if WASM is unavailable, the encode/decode functions will throw an error
enc = leb.encodeULEB128(Number.MAX_SAFE_INTEGER);
// Uint8Array [ 255, 255, 255, 255, 255, 255, 255, 15 ]

// decoding returns tuple of [value (bigint), bytes consumed]
leb.decodeULEB128(enc);
// [ 9007199254740991n, 8 ]

// encode signed int
enc = leb.encodeSLEB128(Number.MIN_SAFE_INTEGER)
// Uint8Array [ 129, 128, 128, 128, 128, 128, 128, 112 ]

leb.decodeSLEB128(enc)
// [ -9007199254740991n, 8 ]
```

## Building the binary

Requirements:

- [Zig](https://ziglang.org/download/)
- [Binaryen](https://github.com/WebAssembly/binaryen)

```bash
# install required tools
brew install zig binaryen

# first run native tests
zig test zig/leb128.zig
# Test 1/2 min safe integer...OK
# Test 2/2 max safe integer...OK
# All tests passed.

# build binary and regenerate src/binary.ts
pnpm build:binary

# test TS/JS version
pnpm test
```

<!-- include ../../assets/tpl/footer.md -->
