import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { dependencies } from './package.json';

// Due to import.meta.env not work in this file, dotenv package used
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const generateSharedConfig = (dependencies: Record<string, string>) => {
    const sharedConfig: Record<string, { requiredVersion: string; import: boolean }> = {};

    Object.keys(dependencies).forEach((dependencyName) => {
        if (['@radix-ui/react-slot'].includes(dependencyName)) return;
        sharedConfig[dependencyName] = {
            requiredVersion: dependencies[dependencyName],
            import: false,
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
            name: 'task-host',
            remotes: {
                taskAuth: `${process.env.VITE_PUBLIC_TASK_AUTH_MFE_URL!}/assets/remoteEntry.js`,
                taskEditor: `${process.env.VITE_PUBLIC_TASK_EDITOR_MFE_URL!}/assets/remoteEntry.js`,
                taskList: `${process.env.VITE_PUBLIC_TASK_LIST_MFE_URL!}/assets/remoteEntry.js`,
            },
            // TODO: adjust shared packages
            shared: ['react', 'react-dom'],
            // Not work in production mode
            // shared: generateSharedConfig(dependencies),
            // shared: {
            //     react: { requiredVersion: '^18.2.0', import: false },
            //     'react-dom': { requiredVersion: '^18.2.0', import: false },
            //     '@supabase/supabase-js': { requiredVersion: '^2.43.4', import: false },
            //     'lucide-react': { requiredVersion: '^0.383.0', import: false },
            // },
            // shared: {
            //     '@radix-ui/react-slot': { requiredVersion: '^1.0.2', import: false },
            //     '@supabase/supabase-js': { requiredVersion: '^2.43.4', import: false },
            //     'class-variance-authority': { requiredVersion: '^0.7.0', import: false },
            //     clsx: { requiredVersion: '^2.1.1', import: false },
            //     'lucide-react': { requiredVersion: '^0.383.0', import: false },
            //     react: { requiredVersion: '^18.2.0', import: false },
            //     'react-dom': { requiredVersion: '^18.2.0', import: false },
            //     'react-router-dom': { requiredVersion: '^6.23.1', import: false },
            //     'tailwind-merge': { requiredVersion: '^2.3.0', import: false },
            //     'tailwindcss-animate': { requiredVersion: '^1.0.7', import: false }
            //   }
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
