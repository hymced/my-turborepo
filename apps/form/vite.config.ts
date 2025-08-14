import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import path from 'node:path'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['>0.3%', 'defaults', 'not dead'],
    }),
    react(), 
  ],
  // resolve: {
  //   alias: {
  //     '@components': path.resolve(__dirname, '../../packages/components/src'),
  //   },
  // },
});
