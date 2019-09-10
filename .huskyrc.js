module.exports = {
  hooks: {
    'pre-commit': 'yarn lint && yarn test --bail && lint-staged',
  },
};
