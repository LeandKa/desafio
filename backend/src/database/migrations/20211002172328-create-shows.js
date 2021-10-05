'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('shows', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            Name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            categoria_id: {
                type: Sequelize.INTEGER,
                references: { model: 'categorias', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            description: {
                type: Sequelize.STRING(1234),
            },
            rating: {
                type: Sequelize.DECIMAL(10, 2),
            },
            creator: {
                type: Sequelize.STRING,
            },
            img: {
                type: Sequelize.STRING,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('shows');
    },
};
