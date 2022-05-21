import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import url from "@rollup/plugin-url";
import htmlTemplate from "rollup-plugin-generate-html-template";

export default {
	input: "src/main.js",
	output: {
		sourcemap: false,
		format: "iife",
		name: "app",
		file: `dist/bundle.js`,
	},
	plugins: [
		copy({
			targets: [{ src: "public/*", dest: "dist/" }],
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: "bundle.css" }),
		url({ fileName: "[name]-[hash][extname]", limit: 0 }),
		vue({ css: false }),
		htmlTemplate({
			template: "index.html",
			target: "dist/index.html",
		}),
		replace({
			"process.env.NODE_ENV": '"production"',
			preventAssignment: true,
		}),
		babel({
			extensions: [".js", ".mjs", ".html", ".vue"],
			babelHelpers: "runtime",
			exclude: ["node_modules/@babel/**", /\/core-js\//],
			presets: [
				[
					"@babel/preset-env",
					{
						targets: { firefox: "48" },
						useBuiltIns: "usage",
						corejs: 3,
					},
				],
			],
			plugins: [
				"@babel/plugin-syntax-dynamic-import",
				"babel-plugin-transform-async-to-promises",
				[
					"@babel/plugin-transform-runtime",
					{
						useESModules: true,
					},
				],
			],
		}),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ["vue"],
		}),
		commonjs(),
		terser(),
	],
};
