import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

const dirname = import.meta.dirname;

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: path.join(dirname, "src/setupTests.js"),
    coverage: {
      exclude: [
        "src/main.jsx",
        "eslint.config.js",
        "vitest.config.js",
        "vite.config.js",
        "src/setupTests.js",
      ],
    },
  },
  plugins: [react()],
});
