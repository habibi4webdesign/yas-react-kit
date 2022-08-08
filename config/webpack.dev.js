/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const webpack = require("webpack");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devtool: "source-map",

  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 4000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
