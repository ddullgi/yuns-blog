import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						code: {
							color: "#495057",
							fontWeight: 600,
							padding: "0.1rem 0.3rem",
							borderRadius: 3,
							background: "#F1F3F5",
							border: "1px solid #C4CDD7",
							margin: "0 0.3rem",
							"&::before, &::after": {
								display: "none",
							},
						},
						a: {
							color: "#3182ce",
							"&:hover": {
								color: "#2c5282",
							},
						},
						img: {
							margin: "auto",
						},
					},
				},
			},
		},
	},
	plugins: [typography],
};

export default config;
