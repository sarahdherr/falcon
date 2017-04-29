'use strict'

const db = require('APP/db')
const Bird = db.model('birds')

// const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .post('/',
    (req, res, next) =>
      Bird.create(req.body.bird)
      .then(bird => bird.setUser(req.body.user))
      .then(bird => res.status(201).json(bird))
      .catch(next))

  .get('/:userId', (req, res, next) => 
    Bird.find({
      where: {user_id: req.params.userId}
    })
      .then(bird => res.json(bird))
      .catch(next))
