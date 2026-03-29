import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';
import babel from 'rollup-plugin-babel';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


import {
    terser
} from "rollup-plugin-terser";


export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'VueBootstrap4Table',
        exports: 'named',
        globals: {
            vue: 'Vue'
        },
        banner: '/*!\n * @5hahil/vue-datatable v1.2.0\n * https://github.com/5hahiL/vue-datatable\n * Fork of rubanraj54/vue-bootstrap4-table\n * (c) Shahil | MIT License\n */',
    },
    external: ['vue'],
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
        resolve({
            jsnext: true,
            main: true
        }),
        babel({
            include: 'node_modules/**',
            runtimeHelpers: true
        }),
        commonjs(),
        terser({ output: { comments: /^!/ } }),
        visualizer({
            filename: './bundle_statistics.html',
            title: 'VueBootstrap4Table bundle analyzer'
        }),
    ],
};
