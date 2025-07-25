import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    root: 'src',
    base: './',
    plugins: [vue()],
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        rollupOptions: {
            input: path.resolve(__dirname, 'src/index.html'),
        },
    },
})
