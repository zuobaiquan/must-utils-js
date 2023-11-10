module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/utils/',
    '/src/helper/',
    '/src/dom/heightToTop'
  ],
};
