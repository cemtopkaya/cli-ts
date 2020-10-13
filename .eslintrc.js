module.exports = {
  // env: {
  //   es2021: true,
  //   node: true,
  // },
  env: {
    node: true,
    jest: true
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  // extends: [
  //   'airbnb-base',
  // ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  // plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
  // rules: {
  // },
};
