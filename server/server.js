//YT = Yhteistiedot

const express = require("express")
const app = express()
const Yhteystiedot = require('./contact_person/cpmodel')
const cors = require("cors")
require("dotenv").config({ path: "./config.env" })
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(require("./contact_person/cprouter"))
// haetaan tietokantayhteys
const dbo = require("./db/dbconn")

dbo.on('error', console.error.bind(console, 'MongoDB connection error:'))
dbo.once('open', function() {
  console.log('Connected to database')
})

//######################################################################
/*
app.get('/',function(req,res){
  console.log('Tää on perus')
  })

app.get('/about',function (req,res){
  res.send('server.js tehty komennolla: npm install express mongoose cors dotenv')

  Yhteystiedot.countDocuments().exec().then(count=> {

    console.log('Kaikkien yhteystietojen lkm ennen lisäystä:', count)

  }).catch(err => {console.error(err)})

})

//allyt => all yhteystiedot => kaikki yhteystiedot
//haetaan kaikki yhteystiedot
app.get('/allyt',function(req,res){  
  Yhteystiedot.find(function(err, allyt) {
      if (err) {
          console.log(err)
      } else {
          
          res.json(allyt)
      }
  })
})

//getyt => get yhteystieto => hae yhteystieto
app.get('/getyt/:id',function(req, res) {
  let id = req.params.id
  Yhteystiedot.findById(id, function(err, yt) {
      console.log("found book"+yt)
      res.json(yt)
  })
})

//addyts = lisää yhteystietoja
app.post('/addyts', function(req,res)
{
  console.log("Ref",req.body)
  let newYt = new Yhteystiedot(req.body)
  console.log("newYt->",newYt)
  newYt.save()
      .then(todo => {
          res.status(200).json({'books': 'Yhteystieto lisätty onnistuneesti'})
      })
      .catch(err => {
          res.status(400).send('Uuden yhteystiedon lisäys epäonnistui')
      })
})

//updateyt = päivitä yhteystieto
app.post('/updateyt/:id',function(req, res) {
  let id = req.params.id
  let updatedYt = new Yhteystiedot(req.body)
  console.log("update id",id,"newYt->",updatedYt)
  
  Yhteystiedot.findByIdAndUpdate(id,
      {
        nimi:updatedYt.nimi,
        kuvaus:updatedYt.kuvaus,
        puhelin:updatedYt.puhelin,
        sposti:updatedYt.sposti,
        katuosoite:updatedYt.katuosoite,
        toimiala:updatedYt.toimiala,
        lisatietoja:updatedYt.lisatietoja
      },
      function (err, docs) { 
        if (err) { 
          console.log(err) 
        } 
        else { 
          res.status(200).json({'yhteystiedot': 'yhteystieto päivitetty onnistuneesti'})
        } 
      })
})

//deleteyt = poista yhteystieto
app.post('/deleteyt/:id',function(req, res) {
  let id = req.params.id;
 
  console.log("poistetaan")
  Yhteystiedot.findByIdAndDelete(id,function (err, docs) { 
    if (err) { 
      console.log(err) 
    } 
    else { 
      res.status(200).send('Yhteystieto poistettu')
    } 
  })
  
})
*/
//######################################################################

app.listen(port, () => console.log(`Server running on port ${port}`))