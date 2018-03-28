var express = require('express');
var app = express.Router();


app.get('/*', (req, res, next) => {
  res.render('index')
});


module.exports = app;
