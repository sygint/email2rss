module.exports = {
  parser: "babel-eslint",
  extends: [
    "cypress"
  ],
  env: {
    "cypress/globals": true
  },
  extends: [
    "airbnb",
    "prettier",
    "jsdoc-strict"
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}