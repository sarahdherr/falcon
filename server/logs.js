'use strict'

const db = require('APP/db')
const Weight = db.model('weights')
const Feeding = db.model('foods')
const Hunting = db.model('hunts')

module.exports = require('express').Router()
  .post('/weight', (req, res, next) => {
    Weight.create(req.body.entry)
    .then(weight => weight.setBird(req.body.birdId))
    .then(weight => res.json(weight))
    .catch(next)
  })

  .post('/feeding', (req, res, next) => {
    Feeding.create(req.body.entry)
    .then(feeding => feeding.setBird(req.body.birdId))
    .then(feeding => res.json(feeding))
    .catch(next)
  })

  .post('/hunting', (req, res, next) => {
    Hunting.create(req.body.entry)
    .then(hunting => hunting.setUser(req.body.userId))
    .then(hunting => res.json(hunting))
    .catch(next)
  })
