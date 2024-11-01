const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/app-tabunganku-fe/',
  pwa: {
    name: "TabunganKu",
    short_name: "TabunganKu",
    display: "standalone",
    themeColor: '#FFF',
    msTileColor: '#FFF',
    appleMobileWebAppStatusBarStyle: 'default',
    description: "TabunganKu App"
  }
})