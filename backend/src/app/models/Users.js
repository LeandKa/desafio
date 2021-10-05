import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Users extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', (user) => {
            if (user.password) {
                user.password_hash = bcrypt.hashSync(user.password, 8);
            }
        });

        return this;
    }
    static associate(models) {
        this.belongsToMany(models.Shows, { through: 'user_favorite_shows' });
    }

    checkPassword(password) {
        return bcrypt.compareSync(password, this.password_hash);
    }
}

export default Users;
