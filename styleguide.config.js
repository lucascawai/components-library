const path = require("path");

module.exports = {
  components: "src/components/**/index.js",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  title: "React Sample Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "@provi/provi-components": path.resolve(__dirname, "src")
  }
};
