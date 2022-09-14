const mongoose = require('mongoose')
const UrlSchema = new mongoose.Schema({value:'string'})
const Url = mongoose.model('Url',UrlSchema)
module.exports = Url