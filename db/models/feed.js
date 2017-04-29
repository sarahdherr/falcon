'use strict'

const { STRING, INTEGER, NOW, DATE } = require('sequelize')

module.exports = db => db.define('foods', {
  type: STRING,
  weight: INTEGER,
  timestamp: {
    type: DATE,
    defaultValue: NOW
  }
})

module.exports.associations = (Feeding, { Bird }) => {
  Feeding.belongsTo(Bird)
}
