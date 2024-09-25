const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    devtool: "source-map",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".json", ".tsx"],
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            hash: true, // cache busting
            filename: "../dist/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
