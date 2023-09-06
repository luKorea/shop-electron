const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolvePath = (dir) => path.resolve(__dirname, dir)

module.exports = {
  // less 配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolvePath('src'),
      components: resolvePath('src/components')
    },
    // 配置打包文件夹名称, 静态文件路径
    configure: (webpackConfig, { paths }) => {
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),
        // 这里根据项目需求更改
        publicPath: process.env.NODE_ENV === 'production' ? './' : ''
      }
      return webpackConfig
    }
  },
  // 配置代理
  devServer: {
    port: 9999,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
