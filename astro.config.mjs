// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import { CONFIG } from './src/data/config.ts';
import { remarkCodeMeta } from './src/lib/remark-code-meta.ts';

// https://astro.build/config
export default defineConfig({
  site: CONFIG.site.url,
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkCodeMeta],
      shikiConfig: {
        themes: {
          light: "dracula-soft",
          dark: "dracula-soft"
        }
      },
      syntaxHighlight: "shiki"
    }),
    sitemap(),
  ],

  markdown: {
    remarkPlugins: [remarkGfm, remarkCodeMeta],
    shikiConfig: {
      themes: {
        light: "dracula-soft",
        dark: "dracula-soft",
      }
    },
    syntaxHighlight: "shiki"
  },
});
