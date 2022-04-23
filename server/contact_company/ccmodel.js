const mongoose = require('mongoose')

const Contact_Company_Schema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  phone_number:{
    type:Number,
    required:false
  },
  email:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:false
  },
  additional_info:{
    type:String,
    required:false
  }
})

module.exports = mongoose.model('ccmodel',Contact_Company_Schema,'CcCollections')