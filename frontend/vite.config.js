import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      port: 5173,
      host: true,
      watch: {
        usePolling: true,
      },
      esbuild: {
        target: "esnext",
        platform: "linux",
      },
    },
    define: {
      VITE_API_URL: JSON.stringify(env.VITE_API_URL),
    },
  };
});
