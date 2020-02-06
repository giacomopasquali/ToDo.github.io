var path = require('path');
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");

module.exports = {
    mode: 'development',
    //entry point
    entry: './src/js/main.js',
    watch: true,
    output: {
            path: path.resolve(__dirname, 'dist'),
            //output point
            filename: 'bundle.js'
        },
        module: {
        rules: [
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                'url-loader?limit=10000',
                'img-loader'
            ]
        },
        {
            test: /\.(njk|nunjucks)$/,
            loader: 'nunjucks-loader',
        },
        {
            //regex per verificare se devepassare all'esecuzione tramite "use"
            test: /\.m?js$/,
            //escludiamo queste due cartelle in modo tale da risparmiare tempo a webpack
            exclude: /(node_modules|bower_components)/,
            //includiamo la cartella di riferimento per l'output
            include: path.resolve(__dirname, 'dist'),
            use: {
            loader: 'babel-loader',
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
            ],
            },
        ],
    },
    plugins: [
        new NunjucksWebpackPlugin({
            templates: [
                {
                from: "./src/nunjucks/index.html",
                to: "index.html"
                }
            ]
            }),
        ]
}