module.exports = {
  // support properties on classes
  "plugins": [
    "transform-class-properties",
    "@babel/plugin-transform-runtime"
  ],

  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}