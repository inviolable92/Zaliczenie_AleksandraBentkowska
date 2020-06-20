const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: 'development',
	  entry: {
          'index': './src/index.js',
          'indexTest': './src/indexTest.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ManifestPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: true,
          chunks: ['index'],
        }), 
        new HtmlWebpackPlugin({
          template: './src/test.html',
          inject: true,
          chunks: ['indexTest'],
          filename: 'test.html',
        })
    ],
	  output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
		    path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
              'file-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader',
          ],
        },
      ]
    }
}