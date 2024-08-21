import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { dependencies } from './package.json';

const generateSharedConfig = (dependencies: Record<string, string>) => {
    const sharedConfig: Record<string, { requiredVersion: string }> = {};

    Object.keys(dependencies).forEach((dependencyName) => {
        sharedConfig[dependencyName] = {
            requiredVersion: dependencies[dependencyName],
        };
    });

    return sharedConfig;
};

console.log('SharedConfig', generateSharedConfig(dependencies));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'task-auth',
            filename: 'remoteEntry.js',
            exposes: {
                './TaskAuth': './src/App.tsx',
            },
            // TODO: adjust shared packages
            shared: ['react', 'react-dom'],
            // Not work in production mode
            // shared: generateSharedConfig(dependencies),
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
