import Sequelize, { Model } from 'sequelize';

class Show_tags extends Model {
    static init(sequelize) {
        super.init(
            {},
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {}
}

export default Show_tags;
