const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

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
  }
};