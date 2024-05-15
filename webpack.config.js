module.exports = {
    entry: [
        __dirname + "/app/App.js",
    ],

    output: {
        Path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/public",
    },
    
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react'],
                plugins: ["jsx-control-statements"]
            }
        }]
    }
};