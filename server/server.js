//YT = Yhteistiedot

const express = require('express')
const app = express()

const cors = require('cors')

require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./contact_person/cprouter'))

// haetaan tietokantayhteys
const dbo = require('./db/dbconn')
dbo.on('error', console.error.bind(console, 'MongoDB connection error:'))
dbo.once('open', function () {
    console.log('Connected to database')
})

app.use(require('./support_teams/supteams_router'))

app.listen(port, () => console.log(`Server running on port ${port}`))
