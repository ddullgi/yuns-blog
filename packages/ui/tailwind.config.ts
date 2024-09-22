import baseConfig from "@yuns-blog/tailwind-config/base";
import type { Config } from "tailwindcss";

const config: Config = {
	...baseConfig,
	content: [
		"../../apps/storybook/**/*.{js,ts,jsx,tsx,mdx}",
		"./.stories/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
