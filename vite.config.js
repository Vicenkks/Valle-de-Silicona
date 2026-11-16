import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    open: "/react.html",
  },
  build: {
    rollupOptions: {
      input: {
        principal: resolve(import.meta.dirname, "index.html"),
        react: resolve(import.meta.dirname, "react.html"),
      },
    },
  },
});