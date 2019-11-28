import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import typescript from "@wessberg/rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/vue-reusable-modal.esm.js",
      name: "VueReusableModal",
      globals: {
        vue: "Vue"
      }
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      typescript({
        browserslist: ["last 1 version", "> 5%"],
        transpiler: "babel"
      })
    ]
  },
  // SSR build.
  {
    input: "src/index.ts",
    output: {
      format: "cjs",
      file: "dist/vue-reusable-modal.ssr.js",
      name: "VueReusableModal",
      globals: {
        vue: "Vue"
      }
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      vue({ template: { optimizeSSR: true } }),
      typescript({
        browserslist: ["node 12"],
        transpiler: "babel"
      })
    ]
  },
  // Browser build.
  {
    input: "src/index.ts",
    output: {
      format: "iife",
      file: "dist/vue-reusable-modal.js",
      globals: {
        vue: "Vue"
      },
      name: "VueReusableModal"
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      typescript({
        browserslist: ["last 1 version", "> 5%"],
        transpiler: "babel"
      }),
      terser()
    ]
  }
];
