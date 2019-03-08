const path = require('path');

module.exports = () => ({
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './entry/index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: [/.js$/, /.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      }
    ]
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: './views',
    publicPath: '/',
    open: true
  },
  devtool: 'eval-source-map'
})