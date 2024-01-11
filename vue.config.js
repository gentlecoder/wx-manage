module.exports = {
  publicPath: './',
  devServer: {
    // 后端请求转发，此配置仅开发环境有效，生产环境请参考生产环境部署文档配置nginx转发
    proxy: {
      '/wx': {
        target: 'http://localhost:8088/'
      }
    },
    port: 8001
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      allowedHosts: 'all'
    }
  },
  chainWebpack: (config) => {
    // 移除 prefetch 插件
    // config.plugins.delete('prefetch')
    // config.resolve.alias.set('vue', '@vue/compat')
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .tap((options) => {
    //     return {
    //       ...options,
    //       compilerOptions: {
    //         compatConfig: {
    //           MODE: 3
    //         }
    //       }
    //     }
    //   })
  },

  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined
}
