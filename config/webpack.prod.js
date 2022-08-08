/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prodConfig = {
  mode: "production",
  output: {
    filename: "index.js",
    publicPath: "/",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
