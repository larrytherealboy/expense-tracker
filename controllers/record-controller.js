const { Record, User } = require('../models')

const recordController = {
  getRecords: (req, res) => {
    res.render('records')
  }
}

module.exports = recordController