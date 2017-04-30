'use strict'

const db = require('APP/db')
const Weight = db.model('weights')
const Feeding = db.model('foods')
const Hunting = db.model('hunts')

module.exports = require('express').Router()
  .post('/weight', (req, res, next) => {
    Weight.create(req.body.entry)
    .then(weight => weight.setUser(req.body.userId))
    .then(weight => res.json(weight))
    .catch(next)
  })

  .post('/feeding', (req, res, next) => {
    Feeding.create(req.body.entry)
    .then(feeding => feeding.setUser(req.body.userId))
    .then(feeding => res.json(feeding))
    .catch(next)
  })

  .post('/hunting', (req, res, next) => {
    Hunting.create(req.body.entry)
    .then(hunting => hunting.setUser(req.body.userId))
    .then(hunting => res.json(hunting))
    .catch(next)
  })

  .get(`/weight/:userId`, (req, res, next) =>
    Weight.findAll({
      where: {
        user_id: req.params.userId
      }
    })
    .then(weights => res.json(weights))
    .catch(next))

  .get(`/feeding/:userId`, (req, res, next) =>
    Feeding.findAll({
      where: {
        user_id: req.params.userId
      }
    })
    .then(feedings => res.json(feedings))
    .catch(next))

  .get(`/hunting/:userId`, (req, res, next) =>
    Hunting.findAll({
      where: {
        user_id: req.params.userId
      }
    })
    .then(hunts => res.json(hunts))
    .catch(next))
