const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // ou 'production' conforme necessário
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/homepage.html', // Caminho para o seu arquivo HTML de template
      filename: 'homepage.html', // Nome do arquivo de saída
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
