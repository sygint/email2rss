module.exports = {
  parser: "babel-eslint",
  plugins: [
    "cypress"
  ],
  env: {
    "cypress/globals": true
  },
  extends: [
    "cypress"
  ],
  env: {
    "cypress/globals": true
  },
  extends: [
    "cypress"
  ],
  env: {
    "cypress/globals": true
  },
  extends: [
    "airbnb",
    "prettier",
    "jsdoc-strict",
    "jest-enzyme"
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
  }
}