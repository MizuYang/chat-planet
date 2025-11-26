// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: false,
  },
})
  .append(eslintPluginPrettierRecommended)
  .override("nuxt/vue/rules", {
    rules: {
      // Vue 規則 - 只保留語義規則,移除樣式規則避免與 Prettier 衝突
      "vue/multi-word-component-names": "error",
      "vue/no-v-html": "error",
      "vue/require-v-for-key": "error",
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
        },
      ],
      "vue/no-template-shadow": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-unused-refs": "warn",
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
    },
  })
  .override("nuxt/typescript/rules", {
    rules: {
      // TypeScript 規則
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
    },
  });
