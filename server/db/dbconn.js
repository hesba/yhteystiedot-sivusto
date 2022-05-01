const mongoose = require('mongoose')

mongoose
    .connect(process.env.CONN_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => {
        console.error('Connection error', err.message)
    })

const db = mongoose.connection

module.exports = db
