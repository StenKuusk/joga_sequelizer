'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        name: 'Billy William',
        slug: 'billy-william',
        image: 'billy.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2000-01-08 14:02:30',
        createdAt: new Date(),
        updatedAt: new Date()      
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: 'Fredrick Fazberington',
        slug: 'fredrick-fazberington',
        image: 'fredrick.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '1980-04-14 15:02:41',
        createdAt: new Date(),
        updatedAt: new Date()      
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: 'Ning Yang',
        slug: 'ning-yang',
        image: 'ning.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        published: '2035-05-28 12:02:55',
        createdAt: new Date(),
        updatedAt: new Date()      
      }]),
    ])
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};