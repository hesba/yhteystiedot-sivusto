const dbConfig = require(process.env.CONN_URI)
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.supteams = require('./supteams_model')(mongoose)
module.exports = db
