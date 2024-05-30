import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'task-host',
            remotes: {
                taskAuth: 'http://localhost:5001/assets/remoteEntry.js',
                taskEditor: 'http://localhost:5002/assets/remoteEntry.js',
                taskList: 'http://localhost:5003/assets/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
});
