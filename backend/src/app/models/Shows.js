import Sequelize, { Model } from 'sequelize';

class Shows extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                description: Sequelize.STRING(1234),
                rating: Sequelize.DECIMAL(10, 2),
                creator: Sequelize.STRING,
                img: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Categorias, {
            foreignKey: 'categoria_id',
            as: 'categoria',
        });
        this.belongsToMany(models.Tags, { through: 'show_tags' });
        this.belongsToMany(models.Users, { through: 'user_favorite_shows' });
    }
}

export default Shows;
