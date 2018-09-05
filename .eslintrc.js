module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "cypress"
  ],
  "env": {
    "cypress/globals": true
  },
  "extends": [
    "airbnb",
    "prettier"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}