/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,   // needed for the DC port mapping to work
    strictPort: true,
    port: 3000
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
