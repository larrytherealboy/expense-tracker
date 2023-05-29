'use strict';
const CATEGORY = {
  家居物業: "fa-solid fa-house",
  交通出行: "fa-solid fa-van-shuttle",
  休閒娛樂: "fa-solid fa-face-grin-beam",
  餐飲食品: "fa-solid fa-utensils",
  其他: "fa-solid fa-pen"
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories',
      Object.keys(CATEGORY).map(itemName => {
          return {
            name: itemName,
            image: CATEGORY[itemName],
            created_at: new Date(),
            updated_at: new Date()
          }
        }
        ), {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', {})
  }
}