const path = require('path');

module.exports = [{
  "mode": "development",
  "entry": "./src/js/app.js",
  "output": {
      "path": __dirname+'/./dist/js',
      "filename": "app.js"
  },
  "devtool": "source-map",
  "module": {
      "rules": [
          {
              "enforce": "pre",
              "test": /\.(js|jsx)$/,
              "exclude": /node_modules/,
              "use": "eslint-loader"
          },
          {
              "test": /\.js$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "babel-loader",
                  "options": {
                      "presets": [
                          "@babel/preset-env"
                      ]
                  }
              }
          },
          {
              "test": /\.scss$/,
              "use": [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
              ]
          }
      ]
  }
}];