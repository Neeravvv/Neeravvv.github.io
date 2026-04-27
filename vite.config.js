import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        format: 'umd',
        name: 'PortfolioApp'
      }
    }
  }
})