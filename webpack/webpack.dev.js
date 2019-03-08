module.exports = () => ({
  mode:'development',
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: './views',
    publicPath: '/',
    open: true
  },
  devtool: 'eval-source-map'
})