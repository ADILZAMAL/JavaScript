const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    mode: 'production',
    output: {
        filename: '[contenthash].js',
        path:path.resolve(__dirname,'assets','scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-source-map',
    plugins:[ new cleanPlugin.CleanWebpackPlugin()]
};