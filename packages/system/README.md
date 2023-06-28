<!-- This file is generated - DO NOT EDIT! -->

# ![@thi.ng/system](https://media.thi.ng/umbrella/banners-20220914/thing-system.svg?9d062154)

[![npm version](https://img.shields.io/npm/v/@thi.ng/system.svg)](https://www.npmjs.com/package/@thi.ng/system)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/system.svg)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109331703950160316?domain=https%3A%2F%2Fmastodon.thi.ng&style=social)](https://mastodon.thi.ng/@toxi)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

- [About](#about)
- [Status](#status)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [API](#api)
  - [Example system](#example-system)
  - [System visualization](#system-visualization)
- [Authors](#authors)
- [License](#license)

## About

Minimal and explicit dependency-injection & lifecycle container for stateful app components.

Inspired by Stuart Sierra's
[component](https://github.com/stuartsierra/component) framework for
Clojure/ClojureScript.

## Status

**STABLE** - used in production

[Search or submit any issues for this package](https://github.com/thi-ng/umbrella/issues?q=%5Bsystem%5D+in%3Atitle)

## Installation

```bash
pnpm i @thi.ng/system
```

ES module import:

```html
<script type="module" src="https://cdn.skypack.dev/@thi.ng/system"></script>
```

[Skypack documentation](https://docs.skypack.dev/)

For Node.js REPL:

```js
const system = await import("@thi.ng/system");
```

Package sizes (brotli'd, pre-treeshake): ESM: 387 bytes

## Dependencies

- [@thi.ng/api](https://github.com/thi-ng/umbrella/tree/develop/packages/api)
- [@thi.ng/dgraph](https://github.com/thi-ng/umbrella/tree/develop/packages/dgraph)
- [@thi.ng/logger](https://github.com/thi-ng/umbrella/tree/develop/packages/logger)

## API

[Generated API docs](https://docs.thi.ng/umbrella/system/)

TODO

### Example system

```ts
import { defSystem, ILifecycle } from "@thi.ng/system";

// Step 1: Define the structure / components of your system

interface FooSys {
    db: DB;
    cache: Cache;
    logger: Logger;
    dummy: ILifecycle;
}

// Step 2: Provide component implementations
// Components can be classes or any object implementing the (fully optional)
// `ILifecycle` interface...

class Logger implements ILifecycle {

    info(msg: string) {
        console.log(`[info] ${msg}`);
    }

    async start() {
        this.info("start logger");
        return true;
    }

    async stop() {
        this.info("stop logger");
        return true;
    }
}

// DB requires a logger & cache

class DB implements ILifecycle {

    constructor(protected logger: Logger, protected cache: Cache) {}

    async start() {
        this.logger.info("start db");
        return true;
    }

    async stop() {
        this.logger.info("stop db");
        return true;
    }
}

class Cache implements ILifecycle {

    constructor(protected logger: Logger) {}

    async start() {
        this.logger.info("start cache");
        return true;
    }

    async stop() {
        this.logger.info("stop cache");
        return true;
    }
}

// Step 3: Define system & component dependencies
// This will initialize all components in dependency order

// - All arg types and dependency IDs are inferred / type checked
// - `System` itself implements `ILifecycle`, so can be used to form
//   nested systems

const FOO = defSystem<FooSys>({
    db: {
        factory: (deps) => new DB(deps.logger, deps.state),
        deps: ["logger", "state"],
    },
    logger: { factory: () => new Logger() },
    cache: {
        factory: ({ logger }) => new Cache(logger),
        deps: ["logger"],
    },
    dummy: {
        factory: ({ logger }) => ({
            async start() {
                logger.info("start dummy");
                return true;
            },
            async stop() {
                logger.info("stop dummy");
                return true;
            },
        }),
        deps: ["logger"]
    }
});

// Step 4: Asynchronously start all components in dependency order
FOO.start();
// [info] start logger
// [info] start cache
// [info] start dummy
// [info] start db

// Step 5 (optional): Async shutdown all (in reverse order)
FOO.stop();
// [info] stop db
// [info] stop dummy
// [info] stop cache
// [info] stop logger

// Calls stop() & if successful followed by start()
FOO.reset();
```

### System visualization

For a `System` to initialize its components in the correct order, an internal
[dependency
graph](https://github.com/thi-ng/umbrella/tree/develop/packages/dgraph) is
constructed. This graph is not required any further after system construction,
though can be useful for debugging and documentation purposes.

For example, we can utilize the
[@thi.ng/dgraph-dot](https://github.com/thi-ng/umbrella/tree/develop/packages/dgraph-dot)
package to generate a [Graphviz](https://graphviz.org) source file to visualize
the dependencies between the system's components.

```ts
import { toDot } from "@thi.ng/dgraph-dot";

console.log(toDot(FOO.graph, { id: (node) => node }));
// digraph g {
// "db"[label="db"];
// "logger"[label="logger"];
// "state"[label="state"];
// "dummy"[label="dummy"];
// "db" -> "logger";
// "db" -> "state";
// "state" -> "logger";
// "dummy" -> "logger";
// }
```

Resulting visualization:

![graphviz output](https://raw.githubusercontent.com/thi-ng/umbrella/develop/assets/system/basic.png)

## Authors

- [Karsten Schmidt](https://thi.ng) (Main author)
- [Kevin Nolan](https://github.com/allforabit)

If this project contributes to an academic publication, please cite it as:

```bibtex
@misc{thing-system,
  title = "@thi.ng/system",
  author = "Karsten Schmidt and others",
  note = "https://thi.ng/system",
  year = 2020
}
```

## License

&copy; 2020 - 2023 Karsten Schmidt // Apache License 2.0
