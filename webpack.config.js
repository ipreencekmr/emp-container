const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
// eslint-disable-next-line no-unused-vars
module.exports = (_, argv) => ({
    output: {
        publicPath: argv.mode == "development" ? 
            "http://localhost:3002/":
            "http://app.learn-coding.xyz:3002/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3002,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "emp_container",
            filename: "remoteEntry.js",
            remotes: {
                emp_home: argv.mode == "development" ? 
                    "emp_home@http://localhost:3003/remoteEntry.js":
                    "emp_home@http://app.learn-coding.xyz:3003/remoteEntry.js",
            },
            exposes: {
                "./Container": "./src/App.jsx",
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                "react-redux": {
                    singleton: true,
                    requiredVersion: deps["react-redux"],
                },
                "@reduxjs/toolkit": {
                    singleton: true,
                    requiredVersion: deps["@reduxjs/toolkit"],
                }
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
});
