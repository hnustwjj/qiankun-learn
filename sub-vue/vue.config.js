module.exports = {
  devServer: {
    port: 8888,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `vueApp`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
    },
  },
};
