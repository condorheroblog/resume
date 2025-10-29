import { defineConfig } from "astro/config";
import { codeInspectorPlugin } from 'code-inspector-plugin';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	base: "resume",
	integrations: [react()],

	vite: {
		plugins: [
			codeInspectorPlugin({ bundler: 'vite' }),
			tailwindcss()
		]
	}
});
