module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.git/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|bmp|svg)$': '<rootDir>/__mocks__/staticAssets.js',
    // The default react-spring file is not CJS, so we have to explicitly map it
    'react-spring': '<rootDir>/node_modules/react-spring/web.cjs',
  },
};
