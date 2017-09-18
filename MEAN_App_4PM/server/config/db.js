var mongoose = require('mongoose');

const con = mongoose.connect('mongodb://localhost:27017/app_4pm');
module.exports = con;