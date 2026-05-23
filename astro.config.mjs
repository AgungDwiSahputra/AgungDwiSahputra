// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const BASE = '/AgungDwiSahputra';
const PAGEFIND_ID = `${BASE}/pagefind/pagefind.js`;

/** Stub pagefind di dev mode agar tidak error "file not found" */
const pagefindDevStub = {
  name: 'pagefind-dev-stub',
  apply: /** @type {'serve'} */ ('serve'),
  resolveId(/** @type {string} */ id) {
    if (id === PAGEFIND_ID) return '\0pagefind-stub';
  },
  load(/** @type {string} */ id) {
    if (id === '\0pagefind-stub') {
      return `
        export const __isDev = true;
        export const init = () => Promise.resolve();
        export const search = () => Promise.resolve({ results: [] });
      `;
    }
  },
};

export default defineConfig({
  site: 'https://agungdwisahputra.github.io',
  base: BASE,

  vite: {
    plugins: [tailwindcss(), pagefindDevStub],
    build: {
      rollupOptions: {
        external: [PAGEFIND_ID],
      },
    },
  },

  integrations: [sitemap()],
});