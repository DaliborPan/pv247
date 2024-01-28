module.exports = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "(.*).css$",
    "<THIRD_PARTY_MODULES>",
    "^iqf-web-ui/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: "auto",
};
