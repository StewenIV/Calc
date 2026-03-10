import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { playwright } from "@vitest/browser-playwright"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    browser: {
      enabled: true,
      provider: playwright({
        launchOptions: {
          slowMo: 500,
        }
      }), 
      instances: [
        { browser: 'chromium' },
      ],
      headless: false,
    },
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
})