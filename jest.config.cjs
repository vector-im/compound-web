
module.exports = {
  "testEnvironment": "jsdom",
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
}
