const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const port = 3004;

module.exports = () => {
  return {
    entry: {
      v3: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: `aii-cx-widget-[name].${process.env.NAME_POSTFIX}.js`,
      // https://ui.dev/react-router-cannot-get-url-refresh
      publicPath: production ? '' : '/',
    },

    module: {
      rules: [
        {
          // https://chriscourses.com/blog/loading-fonts-webpack
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|webp)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css|sass|scss)$/,
          exclude: /node_modules/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: !production,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !production,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@src': path.join(__dirname, 'src'),
      },
      extensions: ['*', '.js', '.jsx', '.scss', '.ts', '.tsx'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Webpack & React',
        template: './index.html',
        // favicon: "./public/favicon.ico"
      }),
      new MiniCssExtractPlugin({
        filename: production ? '[name].[contenthash].css' : '[name].css',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.REACT_APP_BE_API_URL': JSON.stringify(process.env.REACT_APP_BE_API_URL),
        'process.env.REACT_APP_FORM_SOCKET_URL': JSON.stringify(
          process.env.REACT_APP_FORM_SOCKET_URL,
        ),
        'process.env.APP_URL': JSON.stringify(process.env.APP_URL),
      }),
    ],
    devServer: {
      port,
      hot: true,
      historyApiFallback: true,
      https: false,
    },
    mode: production ? 'production' : 'development',
  };
};
