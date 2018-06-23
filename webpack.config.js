const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.ProgressPlugin()],
  mode: "development",
  output: {
    filename: "chance",
    library: "chance",
    libraryTarget: "commonjs2"
  }
};
