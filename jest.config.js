/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  roots: [
    '<rootDir>/src'
  ],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/Application/$1',
    '@domain/(.*)': '<rootDir>/src/Domain/$1',
    '@infra/(.*)': '<rootDir>/src/Infrastructure/$1',
    '@api/(.*)': '<rootDir>/src/Api/$1',
  }
};