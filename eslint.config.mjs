import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: [
      "**/*.{ts}",
    ],
    rules: {
      "semi": ["error", "always"],
    },
  },
  {
    files: [
      "**/*.{mjs}",
    ],
    rules: {
      "semi": ["error", "always"],
    },
  },
  {
    ignores: [
      "**/node_modules/",
      "dist/"
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic
);
