import baseConfig from "@yuns-blog/tailwind-config/base";
import type { Config } from "tailwindcss";

const config: Config = {
	...baseConfig,
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;
