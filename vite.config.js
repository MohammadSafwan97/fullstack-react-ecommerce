import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // 📌 Import path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Components": path.resolve(__dirname, "src/Components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },

  // 📌 Dev server proxy
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/images": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
