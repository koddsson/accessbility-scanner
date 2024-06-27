import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import myConfig from "@koddsson/eslint-config";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...myConfig,
  {
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-anonymous-default-export": "off",
    },
  },
);