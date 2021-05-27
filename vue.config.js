require("dotenv").config();

module.exports = {
  devServer: {
    port: process.env.PORT || 8080,
    disableHostCheck: true,
    proxy: {
      "^/api": {
        target: process.env.API_URL,
        pathRewrite: { "^/api": "/" },
        changeOrigin: true,
      },
    },
  },
};
