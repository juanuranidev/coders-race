import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      css: "/src/css",
      lib: "/src/lib",
      pages: "/src/pages",
      hooks: "/src/hooks",
      store: "/src/store",
      assets: "/src/assets",
      routes: "/src/routes",
      styles: "/src/styles",
      layouts: "/src/layouts",
      adapters: "/src/adapters",
      contexts: "/src/contexts",
      services: "/src/services",
      components: "/src/components",
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    port: 5173,
    strictPort: true,
  },
});
