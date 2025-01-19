// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import astroExpressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    tailwind(),
    astroExpressiveCode({
      themes: ['poimandres', 'light-plus'],
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '0px',
      },
    }),
  ]
});