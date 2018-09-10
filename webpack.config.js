const path = require("path"),
  webpack = require("webpack");

module.exports = {
  entry:"./src/navigation_handler.ts",
  output: {
    path: path.resolve(__dirname, "dist")
  },

  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, "src"),
        loader: "ts-loader"
      }
    ]
  },

  plugins: []
};
