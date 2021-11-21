module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },

  productionSourceMap: false,

  transpileDependencies: [
    'vuetify'
  ]
}
