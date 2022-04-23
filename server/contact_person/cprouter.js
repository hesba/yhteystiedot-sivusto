const express = require('express')
const router = express.Router()
const ContactPerson = require('./cpmodel')

const dbo = require('../db/dbconn')

router.route('/').get(function(req,res){
  console.log('Basic')
  })

router.route('/about').get(function (req,res){
  res.send('server.js = npm install express mongoose cors dotenv')

  ContactPerson.countDocuments().exec().then(count=> {

    console.log('All contacts (person) before adding:', count)

  }).catch(err => {console.error(err)})

})

//get all contacts (person)
router.route('/allcontactp').get(function(req,res){  
  ContactPerson.find(function(err, allcontactp) {
      if (err) {
          console.log(err)
      } else {
          
          res.json(allcontactp)
      }
  })
})

//get contacts (person)
router.route('/getcontactp/:id').get(function(req, res) {
  let id = req.params.id
  ContactPerson.findById(id, function(err, contactp) {
      console.log("found contact (person)"+contactp)
      res.json(contactp)
  })
})

//add contacts (person)
router.route('/addcontactp').get(function(req,res)
{
  console.log("Ref",req.body)
  let newContactp = new ContactPerson(req.body)
  console.log("newContactp->",newContactp)
  newContactp.save()
      .then(todo => {
          res.status(200).json({'contactp': 'New contact (person) added successfully'})
      })
      .catch(err => {
          res.status(400).send('Adding new contact (person) failed')
      })
})

//update contacts (person)
router.route('/updatecontactp/:id').get(function(req, res) {
  let id = req.params.id
  let updatedContactp = new ContactPerson(req.body)
  console.log("update id",id,"newContactp->",updatedContactp)
  
  ContactPerson.findByIdAndUpdate(id,
      {
        name:updatedContactp.name,
        phonenumber:updatedContactp.phone_number,
        email:updatedContactp.email,
        industry:updatedContactp.industry,
        additional_info:updatedContactp.additional_info
      },
      function (err, docs) { 
        if (err) { 
          console.log(err) 
        } 
        else { 
          res.status(200).json({'contactperson': 'Contact (person) updated successfully'})
        } 
      })
})

//delete contacts (person)
router.route('/deletecontactp/:id').get(function(req, res) {
  let id = req.params.id;
 
  console.log("deleting")
  ContactPerson.findByIdAndDelete(id,function (err, docs) { 
    if (err) { 
      console.log(err) 
    } 
    else { 
      res.status(200).send('Contact (person) deleted')
    } 
  })
  
})

module.exports = router