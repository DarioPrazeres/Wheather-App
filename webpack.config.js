const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    },
],
},
};