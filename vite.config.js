import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        createSvgIconsPlugin({
            iconDirs: [resolve(__dirname, 'resources/js/bds/src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js/bds/src'),
            '#': resolve(__dirname, 'resources/js/bds/types')
        }
    },
    optimizeDeps: {
        include: ['@/setup']
    }
});
