var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './demo/build'),
    publicPath: '/demo/build/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [
         'vue-style-loader',
         'css-loader'
       ],
     },
     {
       test: /\.scss$/,
       use: [
         'vue-style-loader',
         'css-loader',
         'sass-loader'
       ],
     },
     {
       test: /\.sass$/,
       use: [
         'vue-style-loader',
         'css-loader',
         'sass-loader?indentedSyntax'
       ],
     },
     {
       test: /\.vue$/,
       loader: 'vue-loader',
       options: {
         loaders: {
           'scss': [
             'vue-style-loader',
             'css-loader',
             'sass-loader'
           ],
           'sass': [
             'vue-style-loader',
             'css-loader',
             'sass-loader?indentedSyntax'
           ]
         }
       }
     },
     {
       test: /\.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/
     },
     {
       test: /\.(png|jpg|gif|svg|mov|mp4)$/,
       loader: 'file-loader',
       options: {
         name: '[name].[ext]'
       }
     }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
