/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				".link": {
					color: theme("colors.blue.500"),
					"textDecorationLine": "underline",
					"textDecorationColor": theme("colors"),
					"textUnderlineOffset": theme("textUnderlineOffset.4"),
					"&:hover": {
						color: theme("colors.blue.700")
					},
				},
			});
		},
	],
}
