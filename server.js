var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevMiddleware = require('webpack-dev-middleware');

var webpackCfg = require('./webpack.config')
var index = require('./controllers/index');

var app = express();

var compiler = webpack(webpackCfg);
app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);

var port = process.env.PORT || '3000';
app.listen(port, function() {
  console.log('Server running on port 127.0.0.1:3000')
})


module.exports = app;
