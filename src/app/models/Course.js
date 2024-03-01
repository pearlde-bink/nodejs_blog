const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: "" },
    descrription: { type: String, default: "" },
    image: { type: String, default: "" },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', Course)