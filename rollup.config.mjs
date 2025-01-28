import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'src/index.js',
	output: {
		file: 'mapsample/PackageSources/mapsample.js',
		format: 'iife'
	},
	plugins: [nodeResolve()]
};