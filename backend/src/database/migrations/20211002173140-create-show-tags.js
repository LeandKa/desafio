'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('show_tags', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            show_id: {
                type: Sequelize.INTEGER,
                references: { model: 'shows', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            tag_id: {
                type: Sequelize.INTEGER,
                references: { model: 'tags', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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
        await queryInterface.dropTable('show_tags');
    },
};
