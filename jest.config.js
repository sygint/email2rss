module.exports = {
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "coverageDirectory": "__coverage__",
  "collectCoverageFrom": ["<rootDir>pages", "<rootDir>components"],

  // identify test setup file for Enzyme adapter and other needs
  "setupTestFrameworkScriptFile": "<rootDir>setupTests.js"
};