/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const pkg = require('../package.json');

const prodConfig = {
  mode: "production",
  output: {
    filename: "index.js",
    publicPath: "/",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    library: pkg.name,
    libraryTarget: "commonjs",
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
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};

module.exports = merge(commonConfig, prodConfig);
