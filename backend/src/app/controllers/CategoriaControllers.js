import Tags from '../models/Tags';
import Shows from '../models/Shows';
import Categoria from '../models/Categorias';

class CategoriaControllers {
    //trazer todas as categorias
    async getAll(req, res) {
        try {
            const result = await Categoria.findAll();

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    //trazer os shows apenas dessa categoria
    async getById(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).send('Id missing');
            }

            const result = await Shows.findAll({
                where: {
                    categoria_id: id,
                },
                include: [Tags],
            });

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
}

export default new CategoriaControllers();
