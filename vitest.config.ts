// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true, // permite usar describe, it, expect sem importar
    environment: 'jsdom', // simula DOM para testes Vue
    include: ['tests/**/*.test.ts'], // ou ['src/**/*.test.ts'] se os testes estiverem no src
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
