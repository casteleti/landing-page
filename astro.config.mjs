import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lp.wellspringflow.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    domains: [],
  },
});
