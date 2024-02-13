build: clean build-wasm

build-wasm: 
	emcc -O3 -s WASM=1 -s --no-entry EXPORTED_RUNTIME_METHODS='["cwrap"]' src/compiler.c -o dist/compiler.wasm

web-demo:
	pnpx http-server

clean: 
	rm dist/*