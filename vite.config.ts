import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import viteTagger from "vite-tagger";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTagger({ prefixName: "wb" })],
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true as true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
