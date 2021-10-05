import Sequelize, { Model } from 'sequelize';

class Tags extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
    static associate(models) {
        this.belongsToMany(models.Shows, { through: 'show_tags' });
    }
}

export default Tags;
