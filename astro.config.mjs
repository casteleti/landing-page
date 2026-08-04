import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.wellspringflow.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    domains: [],
  },
});
