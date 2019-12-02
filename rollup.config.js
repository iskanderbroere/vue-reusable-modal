import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/vue-reusable-modal.esm.js",
      name: "VueReusableModal"
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
      file: "dist/vue-reusable-modal.ssr.js",
      name: "VueReusableModal"
    },
    external: ["vue"],
    plugins: [
      resolve(),
      commonjs(),
      vue({ template: { optimizeSSR: true, isProduction: true } })
    ]
  }
];
