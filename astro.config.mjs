// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:4321',
	integrations: [
		mdx({
			extendMarkdownConfig: true,
			remarkPlugins: [],
			rehypePlugins: [],
		}),
		sitemap(),
		react()
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
