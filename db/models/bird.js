'use strict'

const { STRING, INTEGER } = require('sequelize')

module.exports = db => db.define('birds', {
  name: STRING,
  species: STRING,
  age: STRING,
  flight_weight: STRING,
  weight_loss: STRING,
  img: STRING
})

module.exports.associations = (Bird, { User, Weight, Feeding }) => {
  Bird.belongsTo(User)
  Bird.hasMany(Weight)
  Bird.hasMany(Feeding)
}
