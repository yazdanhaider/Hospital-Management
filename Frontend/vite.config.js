import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// THis will be your backend URL
const BASE_URL = process.env.BASE_URL
console.log(BASE_URL);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { target: BASE_URL, changeOrigin: true },
    },
  },
});
