import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { readdirSync } from 'node:fs'

const apps = readdirSync(resolve(__dirname, 'src'));

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/microcms-field-extensions/' : '/',
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        ...apps.reduce<Record<string, string>>((acc, app) => {
          acc[app] = resolve(__dirname, `src/${app}/index.html`);
          return acc;
        }, {}),
      },
    },
  },
  root: resolve(__dirname, 'src'),
  appType: 'mpa',
}))
