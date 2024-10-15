// vite.config.ts
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: 'https://github.com/ErazorWhite/mortgage-repayment-calculator',
    plugins: [
        react()
    ],
});
