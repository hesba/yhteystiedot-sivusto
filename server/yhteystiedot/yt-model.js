//Yt = Yhteystieto

const mongoose = require('mongoose')

const YtSchema = new mongoose.Schema({
  nimi:{
    type:String,
    required:true
  },
  kuvaus:String,
  puhelin:Number,
  sposti:String,
  katuosoite:String,
  toimiala:String,
  lisatietoja:String
})

module.exports = mongoose.model('ytmodel',YtSchema,'YtCollections')