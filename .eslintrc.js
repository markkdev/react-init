module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["graphql"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-console": "warn",
    "react/prop-types": "warn",
    "prettier/prettier": "warn",
    "graphql/template-strings": ["error", { env: "literal" }],
    "space-before-function-paren": "off",
    "react/prefer-stateless-function": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": "off",
    "global-require": "off",
    "no-unused-vars": "off",
    semi: "warn",
    "arrow-body-style": "off",
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true
      }
    ]
  },
  overrides: [
    {
      files: ["*.graphql", "*.gql"]
    }
  ]
};