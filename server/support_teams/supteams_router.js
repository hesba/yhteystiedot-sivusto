const express = require('express')
const router = express.Router()
//const supteams = require("./supteams_ctrl");
const SupTeam = require('./supteams_model')

// create new supteam
router.post('/api/supteams/create', (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: 'Content can not be empty!' })
        return
    }

    // Create supteam
    const supteam = new SupTeam({
        title: req.body.title,
        support_group: req.body.support_group,
        service_provider: req.body.service_provider,
        description: req.body.description,
    })

    // save supteam in the db
    supteam
        .save(supteam)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Error occurred while creating supteam.',
            })
        })
})

// Retrieve all supteams from the database.
router.get('/api/supteams/findall', (req, res) => {
    const title = req.query.title
    var condition = title
        ? { title: { $regex: new RegExp(title), $options: 'i' } }
        : {}

    SupTeam.find(condition)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Error occurred while retrieving supteams.',
            })
        })
})

// Find a single supteam with an id
router.get('/api/supteams/findone/:id', (req, res) => {
    const id = req.params.id

    SupTeam.findById(id)
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "Couldn't find SupTeam with id: " + id,
                })
            else res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error retrieving SupTeam with id: ' + id,
            })
        })
})

// Update a supteam by the id in the request
router.put('/api/supteams/update/:id', (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Data to update cannot be empty!',
        })
    }
    const id = req.params.id

    SupTeam.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update SupTeam with id: ${id}. Maybe SupTeam was not found!`,
                })
            } else res.send({ message: 'SupTeam was updated successfully.' })
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error updating SupTeam with id: ' + id,
            })
        })
})

// Delete a supteam with the specified id in the request
router.delete('/api/supteams/delete/:id', (req, res) => {
    const id = req.params.id

    SupTeam.findByIdAndRemove(id, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete SupTeam with id: ${id}. Maybe SupTeam was not found!`,
                })
            } else {
                res.send({
                    message: 'SupTeam was deleted successfully!',
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Could not delete SupTeam with id: ' + id,
            })
        })
})

// Delete all supteams from the database.
router.delete('/api/supteams/deleteall', (req, res) => {
    SupTeam.deleteMany({})
        .then((data) => {
            res.send({
                message: `${data.deletedCount} SupTeams were deleted successfully!`,
            })
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while removing all SupTeams.',
            })
        })
})

// Find all published supteams
/*
router.get('api/supteams/published', (req, res) => {
    SupTeam.find({ published: true })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving SupTeams.',
            })
        })
})*/

module.exports = router
