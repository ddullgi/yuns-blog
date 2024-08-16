import baseConfig from "@yuns-blog/tailwind-config/base";
import type { Config } from "tailwindcss";

const config: Config = {
	...baseConfig,
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [...(baseConfig?.plugins ?? [])],
};

export default config;
