const path = require('path')
const webpack = require('webpack')

const relativePath = (str) => path.resolve(__dirname, str)

module.exports = {
  entry: relativePath('./client/App.js'),
  output: {
    filename: 'app.bundle.js',
    path: relativePath('./server/public/dist/js/'),
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env']
        }
      }
    ]
  },
}
