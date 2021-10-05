import Sequelize, { Model } from 'sequelize';

class User_favorite_shows extends Model {
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

export default User_favorite_shows;
