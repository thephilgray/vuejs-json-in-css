const jsonImporter = require("node-sass-json-importer");

module.exports = {
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
        importLoaders: 1
      },
      sass: {
        // options here will be passed to sass-loader
        importer: jsonImporter
      }
    }
  }
};
