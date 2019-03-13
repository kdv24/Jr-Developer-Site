module.exports = {
  '*.{js,jsx}': ['eslint --fix', 'git add'],
  '*.md': ['prettier --write', 'git add'],
};
