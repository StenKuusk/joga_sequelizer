'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Authors', 'id', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'slug', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }),
      queryInterface.changeColumn('Authors', 'image', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'body', {
        type: Sequelize.TEXT,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'published', {
        type: Sequelize.DATE,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'article_id', {
        type: Sequelize.INTEGER
      })
    ])
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('Authors')
    ])
  }
};
