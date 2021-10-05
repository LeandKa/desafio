import Sequelize from 'sequelize';
import Users from '../app/models/Users';
import Tags from '../app/models/Tags';
import Shows from '../app/models/Shows';
import Show_tags from '../app/models/Show_tags';
import Categorias from '../app/models/Categorias';
import DatabaseConfig from '../app/config/database';

const models = [Users, Tags, Shows, Categorias, Show_tags];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
