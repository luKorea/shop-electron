const path = require('path')
const CracoLessPlugin = require('craco-less')
const pxToViewport = require('postcss-px-to-viewport')
const resolvePath = (dir) => path.resolve(__dirname, dir)

const setting = require('./src/settings.json')

// 只会对css
const vw = pxToViewport({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 375, // UI设计稿的宽度
  viewportHeight: 667, // UI
  unitPrecision: 6, // 转换后的精度，即小数点位数
  // propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  // 转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
  selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [vw]
        }
      }
    }
  },
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: '@arco-design/web-react',
          camel2DashComponentName: false,
          style: true // 样式按需加载
        }
      ],
      [
        'import',
        {
          libraryName: '@arco-design/web-react/icon',
          libraryDirectory: 'react-icon',
          camel2DashComponentName: false
        },
        'second'
      ],
      [
        'babel-plugin-styled-components-px2vw-8-plugin',
        {
          unitToConvert: 'px', // 需要转换的单位，默认为"px"
          viewportWidth: 375, // 设计稿的视口宽度
          unitPrecision: 6, // 单位转换后保留的精度
          propList: ['*'], // 能转化为vw的属性列表
          transformRuntime: true // 设置 transformation:true 之后，可以转换被字符串模板嵌套的字符串表达式
        }
      ]
    ]
  },
  // less 配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // 修改 arco 主题颜色
              'arcoblue-6': setting.themeColor
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
