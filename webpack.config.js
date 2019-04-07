const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: glob.sync("./src/*").reduce((entries, entry) => {
        return { ...entries, ...{ [entry.replace(/(\/src|\.js|\.ts)/g, "")]: entry }};
    }, {}),
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: ["ts-loader"],
        },
    ]},
    plugins: glob.sync("./src/*").map(entry => {
        return new HtmlWebpackPlugin({
            template: "template.html",
            chunks: [entry.replace(/(\/src|\.js|\.ts)/g, "")],
            filename: `${entry.replace(/(\/src|\.js|\.ts)/g, "")}.html`,
        })
    }),
    devServer: {
        contentBase: `${__dirname}/dist`,
        compress: true,
        port: 9000
    },
};
