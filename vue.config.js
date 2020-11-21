const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module 
    .rule('less')
    .oneOf('vue')
    .use('px2rem-loader')
    .loader('px2rem-loader')
    .before('postcss-loader') // this makes it work.
    .options({ remUnit: 75, remPrecision: 5,symbolId: 'home1'
  }) //remPrecision保留位数
    .end()
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"))
      .set("assets", resolve("src/assets"))
      .set("views", resolve("src/views"))
      .set("common", resolve("src/common"))
      .set("network", resolve("src/network")).end()
      config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 2000 }))
   
  }
};
 