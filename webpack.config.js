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
           // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
           // the "scss" and "sass" values for the lang attribute to the right configs here.
           // other preprocessors should work out of the box, no loader config like this necessary.
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
         // other vue-loader options go here
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
