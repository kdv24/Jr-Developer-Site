module.exports = {
  env: {
    'cypress/globals': true,
  },
  plugins: ['cypress'],
  extends: ['dslemay', 'dslemay/jest', 'dslemay/react', 'dslemay/jsx-a11y'],
  rules: {},
};
