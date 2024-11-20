const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {                   // ^/api = /api*
        target : serverOrigin,
        changeOrigin : true,
        ws : false,
        pathRewrite : {'^/api' : '/'}
      }
    }
  }
})
