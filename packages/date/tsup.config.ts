import { defineConfig } from "tsup";

export default defineConfig({
	format: ["cjs", "esm"],
	entry: ["./src/*.(ts|tsx)"],
	sourcemap: true,
	dts: true,
	clean: true,
	treeshake: true,
});
