module.exports = {
    entry: './react/app.js',
    output: {
        path: __dirname + '/src/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: __dirname + '/react',
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}