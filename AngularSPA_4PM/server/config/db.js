const mongoose = require('mongoose');

const connnection = mongoose.connect('mongodb://localhost:27017/db_4pm');
module.exports = connnection;