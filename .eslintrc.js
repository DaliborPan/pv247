module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next",
    "prettier",
  ],
  plugins: ["formatjs"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-var-requires": "off",
    "formatjs/enforce-id": ["error"],
    "formatjs/enforce-default-message": ["error", "literal"],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
