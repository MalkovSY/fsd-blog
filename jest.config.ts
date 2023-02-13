export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  coverageProvider: 'babel',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).[tj]s?(x)',
  ],
  watchPathIgnorePatterns: ['node_modules'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
};
