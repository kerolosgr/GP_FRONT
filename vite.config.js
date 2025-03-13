import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      'api.kerolos-safwat.me', // Add your host here
      'localhost', // Allow localhost
      '127.0.0.1', // Allow local IP
    ],
    port: 3001,  // Set the port to 3001
  },
  preview: {
    allowedHosts: [
      'api.kerolos-safwat.me', // Add your host here
      'localhost', // Allow localhost
      '127.0.0.1', // Allow local IP
    ],
    port: 3001, // Specify the port here
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
