const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path');
module.exports = {
    lintOnSave: false,
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  pluginOptions: { // 第三方插件配置
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.join(__dirname, './src/common/common.less')] // less所在文件路径
    }
  }
};

