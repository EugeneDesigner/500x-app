const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require(`express`);


// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   historyApiFallback: true,
// }).listen(3000, 'localhost', function(err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Listening at localhost:3000');
// });


const app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

app.set(`port`, process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set(`ip`, process.env.OPENSHIFT_NODEJS_IP  || `localhost`);


app.listen(app.get(`port`), app.get(`ip`), function(){
  console.log('Application ip ' + app.get(`ip`) + ':' + app.get(`port`));
});
