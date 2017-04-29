'use strict'

const { INTEGER, DATE, NOW } = require('sequelize')

module.exports = db => db.define('weights', {
  current: INTEGER,
  next_flight: DATE,
  timestamp: {
  	type: DATE,
  	defaultValue: NOW
  }
})

module.exports.associations = (Weight, { Bird }) => {
  Weight.belongsTo(Bird)
}
