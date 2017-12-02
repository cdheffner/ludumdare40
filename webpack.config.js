const path = require('path')
const webpack = require('webpack')

const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

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
      },
      { test: /pixi.js/, loader: "script" }
    ]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi.js': pixi,
      'p2': p2,
    }
  }
}
