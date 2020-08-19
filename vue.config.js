module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    port: 10010,
    inline: true,
    stats: { colors: true },
  },
  css: {
    extract: true,
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/css/variables.scss";'
      },
    },
  }
}
