const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const isProduction = process.env.VUE_APP_MODE === 'production' || process.env.VUE_APP_MODE === 'alpha'
module.exports = {
    // baseUrl  type:{string} default:'/' 
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    baseUrl: './',

    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

    outputDir: 'dist',

    // pages:{ type:Object,Default:undfind } 
    /*
      构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
      个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
      的字符串，
      注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
    */
    // pages: {
        // index: {
            // entry for the page
            // entry: 'src/index/main.js',
            // the source template
            // template: 'public/index.html',
            // output as dist/index.html
            // filename: 'index.html'
        // },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js'
    // },

    //lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: false,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项
    configureWebpack: config => {
      // 引入jquery
      config.plugins.push(
        new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "windows.jQuery":"jquery"
          })
      )
      if (isProduction) {
          // externals里的模块不打包
          // Object.assign(config, {
          //   externals: externals
          // })
  
          // 上线压缩去除console等信息
          config.plugins.push(
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true,
                        drop_debugger: false,
                        pure_funcs: ['console.log'] // 移除console
                    }
                },
                sourceMap: false,
                parallel: true
            })
          )
          // 开启gzip压缩
          const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
          config.plugins.push(
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: productionGzipExtensions,
                threshold: 10240,
                minRatio: 0.8
            })
        )
      }
    },
    devServer: {
        port: 8081, // 端口号
        // host: 'localhost',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
          '/declear': {
            target: 'http://test.2e2c.com/api',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/declear': '/declear'
            }
          }
        }, 
    }
}