import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/vue-reusable-modal.esm.js",
      exports: "named",
      sourcemap: true
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        objectHashIgnoreUnknownHack: true,
        clean: true
      }),
      vue({
        template: {
          isProduction: true
        }
      }),
      babel({
        runtimeHelpers: true,
        extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"]
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
      exports: "named",
      sourcemap: true
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        objectHashIgnoreUnknownHack: true,
        clean: true
      }),
      vue({ template: { optimizeSSR: true, isProduction: true } }),
      babel({
        runtimeHelpers: true,
        extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"]
      })
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
      },
      sourcemap: true
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        objectHashIgnoreUnknownHack: true,
        clean: true
      }),
      vue({ template: { isProduction: true } }),
      babel({
        runtimeHelpers: true,
        extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"]
      }),
      terser({
        output: {
          ecma: 5
        }
      })
    ]
  }
];
