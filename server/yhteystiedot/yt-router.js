//Yt = Yhteystieto

const express = require('express')
//const ytCtrl = require('./yt-ctrl')
const router = express.Router()
const Yhteystiedot = require('./yt-model')

//tietokantaan yhteys
const dbo = require('../db/dbconn')

router.route('/').get(function(req,res){
  console.log('Tää on perus')
  })

router.route('/about').get(function (req,res){
  res.send('server.js tehty komennolla: npm install express mongoose cors dotenv')

  Yhteystiedot.countDocuments().exec().then(count=> {

    console.log('Kaikkien yhteystietojen lkm ennen lisäystä:', count)

  }).catch(err => {console.error(err)})

})

//allyt => all yhteystiedot => kaikki yhteystiedot
//haetaan kaikki yhteystiedot
router.route('/allyt').get(function(req,res){  
  Yhteystiedot.find(function(err, allyt) {
      if (err) {
          console.log(err)
      } else {
          
          res.json(allyt)
      }
  })
})

//getyt => get yhteystieto => hae yhteystieto
router.route('/getyt/:id').get(function(req, res) {
  let id = req.params.id
  Yhteystiedot.findById(id, function(err, yt) {
      console.log("found book"+yt)
      res.json(yt)
  })
})

//addyts = lisää yhteystietoja
router.route('/addyts').get(function(req,res)
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
router.route('/updateyt/:id').get(function(req, res) {
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
router.route('/deleteyt/:id').get(function(req, res) {
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

module.exports = router