module.exports = () => ({
  mode: 'development',
  watch: true,
  devServer: {
    historyApiFallback: true,
    open: true
  },
  devtool: 'eval-source-map'
});
