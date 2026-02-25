import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'docs' },
  base: '/portfolio-for-monava/',
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
