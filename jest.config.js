module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  coverageDirectory: 'build/sonar',
  testResultsProcessor: 'jest-sonar-reporter',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/proto/',
    '<rootDir>/src/assets/',
    '<rootDir>/src/router/',
    '<rootDir>/tests/'
  ]
};
