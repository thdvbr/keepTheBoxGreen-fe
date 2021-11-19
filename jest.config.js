module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  forceExit: true,
  clearMocks: true,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
};
