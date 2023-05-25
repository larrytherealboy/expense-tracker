'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Record.associate = function(models) {
    // associations can be defined here
    Record.belongsTo(models.User)
  };
  return Record;
};