'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categorias', [
            {
                Name: 'Marvel',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Dc comics',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Mangás',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Filmes',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Séries',
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
