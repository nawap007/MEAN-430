const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    _id:        { type: ObjectId, auto: true },
    name:       { type: String, required:true },
    address:    { type: String },
    contact:    { type: String, require:true, match: /^[789]\d{9}$/ },
    date:       { type: Date, default: Date.now }
}, { versionKey: false, skipVersioning: true });

const users = mongoose.model('users', userSchema);
module.exports = users;