import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import linaria from "@linaria/vite";
import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';

export default defineConfig({
    plugins: [
        react(),
        linaria({
            include: ["**/*.{ts,tsx}"],
            babelOptions: {
                presets: ["@babel/preset-typescript", "@babel/preset-react"],
            },
            sourceMap: process.env.NODE_ENV !== 'production',
        }),
    ],
    css: {
        postcss: {
            plugins: [
                postcssGlobalData({
                    files: ['./src/index.css'],
                }),
                postcssCustomMedia(),
            ],
        },
    },

})
