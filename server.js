// dependencies
var express = require('express');
var restful = require('node-restful');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/api', require('./routes/api'));

// server
app.listen(3000);
console.log('server is running at port 3000');