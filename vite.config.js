import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


// https://vitejs.dev/config/
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export default defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vueLoginSystem/' // vueLoginSystem 為 repo 名稱
        : '/',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://35.201.130.4',
                ws: true,
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },
    
});
