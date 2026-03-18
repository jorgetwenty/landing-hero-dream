import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    // Target modern browsers only — eliminates legacy polyfills
    target: "es2020",
    // Reduce chunk sizes
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router": ["react-router-dom"],
          "ui-vendor": ["@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-tooltip", "@radix-ui/react-toast"],
          "animation": ["gsap"],
          "carousel": ["embla-carousel-react"],
        },
      },
    },
    // Minify with esbuild (faster, modern output)
    minify: "esbuild",
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
