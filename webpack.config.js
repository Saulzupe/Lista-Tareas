const HtmlWebPackPlugin       = require('html-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    module: {
        rules: [
                {
                    test:  /\.html$/i,
                    loader: 'html-loader',
                    options: {
                        attributes: false,
                        minimize: false,
                    },
                 },
                 {
                     test:/\.css$/,
                     exclude: /styles\.css$/,
                     use: [
                         {loader: 'style-loader'},
                         {loader: 'css-loader'}
                     ]
                 },
                 {
                    test: /styles\.css$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader},
                        {loader: 'css-loader'}
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                esModule: false
                            }
                        }
                    ]

                }

               ]                       
            },

    
    plugins: [
        new HtmlWebPackPlugin ({
            template: './src/index.html',
            filename:   './index.html'
        }),

        new MiniCssExtractPlugin ({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin([
            {from: 'src/assets', to: 'assets/'}
        ])
    ]    
    }




