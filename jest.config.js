//const jestPreset = require("@testing-library/react-native/jest-preset");

module.exports = {
  preset: 'react-native',
  //preset: "@testing-library/react-native",
  collectCoverage: true,
  // setupFiles: [...jestPreset.setupFiles],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/proto/',
    '<rootDir>/src/assets/',
    '<rootDir>/src/router/',
    '<rootDir>/tests/'
  ]
};
