import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], rules:{"no-used-vars": "warn"} },
  // { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"]},
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);

// { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], rules:{"no-used-vars": "warn"} },//videioda bu rulesi ekliyor ama logs kisminda rule yokmus gibi calisiyor ona gore eklersin