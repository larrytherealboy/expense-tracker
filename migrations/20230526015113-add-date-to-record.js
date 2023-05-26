'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Records', 'date', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Records', 'date')
  }
}