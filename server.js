var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


var port = process.env.PORT || '3000';
app.listen(port, function() {
  console.log('Server running on port 127.0.0.1:3000')
})


module.exports = app;
