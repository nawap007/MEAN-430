const mongoose = require('mongoose');

const connnection = mongoose.connect('mongodb://localhost:27017/');
module.exports = connnection;