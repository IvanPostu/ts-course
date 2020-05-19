module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/setupTests.js'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
