import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    EnvironmentPlugin([
      'APP_API_ALEGRA_USERNAME',
      'APP_API_ALEGRA_TOKEN',
      'APP_API_ALEGRA_URL',
      'APP_API_PIXABAY_URL',
      'APP_API_PIXABAY_TOKEN',
    ]),
  ],
});
