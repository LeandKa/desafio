import { Op } from 'sequelize';
import Tags from '../models/Tags';
import Shows from '../models/Shows';
import Categoria from '../models/Categorias';

class ShowControllers {
    //Trazer todos os shows
    async getAll(req, res) {
        try {
            const result = await Shows.findAll({
                include: [
                    {
                        model: Categoria,
                        as: 'categoria',
                        attributes: ['name', 'id'],
                    },
                    Tags,
                ],
            });

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    //Trazer apenas um show
    async getOne(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).send('Missing id');
            }

            const result = await Shows.findByPk(id, {
                include: [
                    {
                        model: Categoria,
                        as: 'categoria',
                        attributes: ['name', 'id'],
                    },
                    Tags,
                ],
            });

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
}

export default new ShowControllers();
