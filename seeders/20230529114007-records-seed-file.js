'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await queryInterface.sequelize.query(
      'SELECT id FROM Categories;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM Users;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    await queryInterface.bulkInsert('Records',
      Array.from({ length: 50 }, () => ({
        name: faker.lorem.word(),
        amount: Math.floor(Math.random() * 1000) + 1,
        date: faker.date.between("2010-01-01", "2022-12-31"),
        category_id: categories[Math.floor(Math.random() * categories.length)].id,
        user_id: users[Math.floor(Math.random() * users.length)].id, 
        created_at: new Date(),
        updated_at: new Date()
      }))
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Records', {})
  }
}