const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: 'dwains-dashboard.js',
    path: path.resolve(__dirname)
  }
};
