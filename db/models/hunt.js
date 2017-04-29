'use strict'

const { STRING, INTEGER, TEXT, DATE, NOW } = require('sequelize')

module.exports = db => db.define('hunts', {
  rating: INTEGER,
  location: STRING,
  description: TEXT,
  timestamp: {
    type: DATE,
    defaultValue: NOW
  }
})

module.exports.associations = (Hunting, { User }) => {
  Hunting.belongsTo(User)
}
