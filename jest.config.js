module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [],
  // If we need to import CSS in our components for testing
  moduleNameMapper: {
    '\\.(css|sass)$': '<rootDir>/tests/mocks/styleMock.js',
  },
};