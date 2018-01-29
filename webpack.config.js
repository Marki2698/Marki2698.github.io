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
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/,
                include: path.resolve(__dirname, "images"),
                loader: "url-loader?limit=30000&name=images/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
    devtool: 'source-map'
};

let jsOutput = Object.assign({}, config, {
    entry: "./js/main.jsx",
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

/* let imgOutput = Object.assign({}, config, {
    entry: "./images",
    output: {
        path: path.resolve(__dirname, "imgs"),
        filename: "[name].jpg"
    }
}); */

module.exports = [
    jsOutput, cssOutput
];