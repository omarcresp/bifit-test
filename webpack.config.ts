import { VueLoaderPlugin } from 'vue-loader';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: resolve(__dirname, 'src', 'main.ts'),
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.vue.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'vue-tslint-loader',
      },
      {
        test: /\.sass$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true,
          //   },
          // },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: 'multiple',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendors',
          enforce: true,
        },
      },
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  config.mode = 'production';
  config.plugins.push(new MiniCssExtractPlugin({
    filename: 'style-[contenthash].css',
  }));
  config.plugins.push(new CompressionWebpackPlugin({
    test: [
      /\.js$/,
      /\.css$/,
    ],
  }));
} else {
  config.resolve.alias.vue = 'vue/dist/vue.esm.browser';
}

export default config;
