import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const entryPoiny = './src/index.js';
const IS_DEV = process.env.NODE_ENV === DEVELOPMENT;
const IS_PROD = !IS_DEV;
const port = 8080;
const location = 'http://localhost:' + port;
const dist = 'bundle';

const config = {
    entry: [
        '@babel/polyfill',
        IS_DEV && 'react-hot-loader/patch',
        IS_DEV && 'webpack-dev-server/client?' + location,
        IS_DEV &&'webpack/hot/only-dev-server',
        entryPoiny,
    ].filter(x => x),

    output: {
        filename: 'bundle.js',
        path: path.resolve(dist),
        publicPath: IS_DEV ? '/' : `/${dist}`,
    },

    mode: IS_DEV ? DEVELOPMENT : PRODUCTION,

    optimization: {
        minimize: IS_PROD
    },

    resolve: {
        modules: ['node_modules', './'],
        extensions: ['.js', '.jsx'],
    },

    devtool: IS_DEV ? 'inline-source-map' : false,

    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({ systemvars: true, defaults: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || DEVELOPMENT),
            'process.env.IS_DEV': JSON.stringify(IS_DEV),
            'process.env.IS_PROD': JSON.stringify(IS_PROD),
        }),
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        IS_DEV && new webpack.HotModuleReplacementPlugin(),
    ].filter(x => x),

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    IS_DEV && 'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve('src','style', '_constants.scss'),
                        },
                    },
                ].filter(x => x),
            },
        ],
    },
};

const devServer = {
    hot: true,
    port,
    historyApiFallback: true,
    contentBase: path.join(__dirname, dist),
};

if (IS_DEV) {
    config.devServer = devServer;
}

module.exports = config;