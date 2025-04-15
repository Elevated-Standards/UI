import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    themePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "static-build"),
    emptyOutDir: true,
  },
  // Base path for assets in production (for GitHub Pages - use repo name if not using custom domain)
  // If you're using a custom domain or deploying to username.github.io, you can use "/"
  // For project repositories (username.github.io/repo-name), use "/repo-name/"
  base: "./",
});