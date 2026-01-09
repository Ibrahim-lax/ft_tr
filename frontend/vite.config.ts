import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // 1. Tells Vite to listen on all network interfaces (needed for Docker)
    port: 5173,      // 2. The port inside the container
    strictPort: true, 
    hmr: {
      clientPort: 443 // 3. IMPORTANT: Tells the "Live Update" to go through Nginx's HTTPS port
    },
  },
})