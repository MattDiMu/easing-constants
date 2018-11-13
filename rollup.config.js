import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
	// umd for browsers
	{
		input: 'src/main.js',
		output: {
			name: 'howLongUntilLunch',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // in case we will ever have dependencies
			commonjs() // in case we will ever have dependencies
		]
	},
	// CommonJS and ES module build.
	{
		input: 'src/main.js',
		external: [/* insert dependencies here :) */],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
