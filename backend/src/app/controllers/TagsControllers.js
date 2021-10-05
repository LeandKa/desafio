import Tags from '../models/Tags';
import Shows from '../models/Shows';

class TagsControllers {
    //Trazer todas as Tags
    async getAll(req, res) {
        try {
            const result = await Tags.findAll();

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    //Trazer apenas shows com essa tag

    async getById(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).send('Id is Missing');
            }

            const result = await Tags.findByPk(id, {
                include: [
                    {
                        model: Shows,
                        include: [Tags],
                    },
                ],
            });

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
}

export default new TagsControllers();
