import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/vue-reusable-modal.esm.js",
      exports: "named"
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      vue({
        template: {
          isProduction: true
        }
      })
    ]
  },
  // SSR build.
  {
    input: "src/index.ts",
    output: {
      format: "cjs",
      compact: true,
      file: "dist/vue-reusable-modal.ssr.js",
      name: "VueReusableModal",
      exports: "named"
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      vue({ template: { optimizeSSR: true, isProduction: true } })
    ]
  },
  // browser build
  {
    input: "src/index.ts",
    output: {
      format: "iife",
      compact: true,
      file: "dist/vue-reusable-modal.min.js",
      name: "VueReusableModal",
      exports: "named",
      globals: {
        vue: "Vue"
      }
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      vue({ template: { isProduction: true } }),
      terser({
        output: {
          ecma: 5
        }
      })
    ]
  }
];
