const webpack = require("webpack");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  plugins: [new webpack.ProgressPlugin()],
  mode: "development"
};
