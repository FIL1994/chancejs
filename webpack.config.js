const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.ProgressPlugin()],
  mode: "development",
  output: {
    filename: "super-chance.js",
    library: "super-chance",
    libraryTarget: "commonjs2"
  }
};
