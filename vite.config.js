import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the maku.cam custom domain at the root, so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
