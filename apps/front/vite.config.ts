import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['>0.3%', 'defaults', 'not dead'],
    }),
    react()
  ],
});
