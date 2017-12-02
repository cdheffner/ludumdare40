const path = require('path')
const webpack = require('webpack')

const relativePath = (str) => path.resolve(__dirname, str)

module.exports = {
  entry: relativePath('./client/WebContent/js/Main.js'),
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
          presets: [
              ['env', { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  },
}
