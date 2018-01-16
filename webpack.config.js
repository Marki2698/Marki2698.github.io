let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'env', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
    devtool: 'source-map'
};

let jsOutput = Object.assign({}, config, {
    entry: "./js/main.js",
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "main.js"
    }
});

let cssOutput = Object.assign({}, config, {
    entry: "./sass/main.scss",
    output: {
        path: path.resolve(__dirname, "dist/css"),
        filename: "style.css"
    }
});

module.exports = [
    jsOutput, cssOutput
];