import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: "/AIMRS-demo-UI/",
  plugins: [react()],
});
