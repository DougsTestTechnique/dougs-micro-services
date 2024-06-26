module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };
  