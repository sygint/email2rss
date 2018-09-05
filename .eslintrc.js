module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "prettier",
    "jsdoc-strict"
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}