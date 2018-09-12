module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "cypress",
    "jsdoc"
  ],
  "env": {
    "cypress/globals": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "jest-enzyme"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/newline-after-description": 1,
    "jsdoc/no-undefined-types": 1,
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-example": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-param": 1,
    "jsdoc/require-param-description": 1,
    "jsdoc/require-param-name": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns-description": 1,
    "jsdoc/require-returns-type": 1,
    "jsdoc/valid-types": 1
  }
}