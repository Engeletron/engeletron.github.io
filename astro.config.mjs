import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://engeletron.com.br',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
});
