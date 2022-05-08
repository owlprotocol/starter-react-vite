import { resolve } from 'path';
import { defineConfig } from 'vite';

//Rollup Plugins
import rollupInject from '@rollup/plugin-inject';

//Vite Plugins
import ReactPlugin from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import CheckerPlugin from 'vite-plugin-checker';
import SVGRPlugin from 'vite-plugin-svgr';
import DTSPlugin from 'vite-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        ReactPlugin(),
        rollupInject({
            Buffer: ['buffer', 'Buffer'],
        }),
        //Expose envars with traditional process.env
        EnvironmentPlugin('all', { prefix: 'VITE_' }),
        SVGRPlugin(),
        CheckerPlugin({
            typescript: true,
            overlay: true,
            eslint: {
                lintCommand: 'eslint --ext .ts,.tsx src --fix',
            },
        }),
        DTSPlugin()
    ],
    resolve: {
        alias: {
            stream: 'rollup-plugin-node-polyfills/polyfills/stream',
            http: 'rollup-plugin-node-polyfills/polyfills/http',
            https: 'rollup-plugin-node-polyfills/polyfills/http',
            buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
            web3: 'web3/dist/web3.min.js'
        },
    },
    build: {
        //Library Mode
        //https://vitejs.dev/guide/build.html#library-mode
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'DemoComponentsLib',
            fileName: (format) => `demo-components-lib.${format}.js`,
        },
        rollupOptions: {
            //Library Mode
            external: ['react', 'react-dom', 'web3'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'web3': 'Web3'
                },
            },
        },
    },
});
