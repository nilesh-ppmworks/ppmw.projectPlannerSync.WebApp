const { webpackConfig, webpackMerge, htmlOverlay } = require('just-scripts');

module.exports = webpackMerge(
  webpackConfig,
  htmlOverlay({
    template: 'public/index.html'
  }),
  {
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      port: 3129 // <--- Add this line and choose your own port number
  },
 // externals: {
 //   'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
 //     serverUrl: "https://myserver.com"
 ///   } : {
 //     serverUrl: "http://localhost:8090"
 //   })
//  }
  }
);
