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
  ],

  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-app-vue/'
    : '/'
}
