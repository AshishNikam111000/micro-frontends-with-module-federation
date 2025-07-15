import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        slb_gui_components: 'http://192.168.179.131:3001/assets/remoteEntry.js',
      },
      shared: ["@reduxjs/toolkit", "echarts", "react", "react-dom", "react-redux", "react-router-dom", "react-use"],
      cors: true
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})