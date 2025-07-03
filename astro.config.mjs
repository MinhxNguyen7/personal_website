import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },

  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },

  site: 'https://minh-nguyen.tech',
  base: '/',
  
  integrations: [sitemap(), mdx()],
  output: 'static',
  adapter: vercel()
});