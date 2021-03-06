module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['jest'],
  ignorePatterns: ['./android/*', '/ios/*'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
