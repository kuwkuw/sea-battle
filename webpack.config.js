 module.exports = {
     entry: './src/app/main.js',
     output: {
         path: 'server/public/app',
         filename: 'bundle.js'
     }/*,
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }*/
 };