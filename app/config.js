var mongoose = require('mongoose');
var crypto = require('crypto');
mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

module.exports = db;
