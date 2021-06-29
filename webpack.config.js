const path = require('path');

module.exports = {
  // entry: './client/index.js',
  entry: path.join(__dirname, '/app.js'),

  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|pdf|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
};
