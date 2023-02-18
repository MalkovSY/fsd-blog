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
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  rootDir: '../../',
  modulePaths: [
    '<rootDir>/src/',
  ],
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).[tj]s?(x)',
  ],
  testEnvironment: 'jsdom',
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
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
  },
};
