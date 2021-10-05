'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tags', [
            {
                Name: 'Ação',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Terror',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Romance',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Ficção científica e Fantasia',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Comédia',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Drama',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
