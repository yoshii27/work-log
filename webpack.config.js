const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${outputPath}/js`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: outputPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          context: "src",
          from: "**/*.html",
          to: outputPath
        }
      ],
      { copyUnmodified: true }
    ),
    new WriteFilePlugin()
  ],
};