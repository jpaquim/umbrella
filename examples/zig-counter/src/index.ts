import type { Fn0 } from "@thi.ng/api";
import { WasmBridge, WasmExports } from "@thi.ng/wasm-api";
import { DOMExports, WasmDom } from "@thi.ng/wasm-api-dom";
import WASM_URL from "./main.wasm?url";

interface WasmApp extends WasmExports, DOMExports {
	start: Fn0<void>;
}

// main app initialization

(async () => {
	// create new WASM bridge with extra API module
	const bridge = new WasmBridge<WasmApp>({ dom: new WasmDom() });
	// instantiate WASM module & bindings
	await bridge.instantiate(fetch(WASM_URL));
	// call WASM main function to kick off
	bridge.exports.start();
})();
