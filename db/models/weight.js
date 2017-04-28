'use strict'

const {DATE, INTEGER, NOW} = require('sequelize')

module.exports = db => db.define('weights', {
  current: {
    type: INTEGER
  },

  next_flight: {
    type: DATE
  },

  date: {
    type: DATE,
    defaultValue: NOW
  }
})

// module.exports.associations = (Bird, {User, Weight, Feeding}) => {
//   Bird.belongsTo(User)
//   Bird.hasMany(Weight)
//   Bird.hasMany(Feeding)
// }
