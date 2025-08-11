import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you later deploy to GitHub Pages under a repo subpath, set base: '/<repo>/'.
  // base: '/outermost-town/'
})
