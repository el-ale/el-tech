const path = require('path');

module.exports = {
  entry: './src/index.js', // Assumindo que seu ponto de entrada é o arquivo src/index.js
  output: {
    path: path.resolve(__dirname, 'build'), // A pasta de saída será build
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // Adicione outros loaders e plugins conforme necessário
    ]
  },
  // Outras configurações do Webpack
};
