import * as Yup from 'yup';
import Shows from '../models/Shows';
import Tags from '../models/Tags';
import Users from '../models/Users';

class UsersController {
    //Criar usuario
    async store(req, res) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().min(3).max(12).required(),
            });

            await schema.validate(req.body, {
                strict: false,
                abortEarly: false,
            });

            const { name, email, password } = req.body;

            const findEmail = await Users.findOne({
                where: {
                    email,
                },
            });
            if (findEmail) {
                let err = new Error('Email already exists');
                err.status = 400;
                throw err;
            } else {
                await Users.create({
                    name,
                    email,
                    password,
                });

                return res.status(200).send('User create with success');
            }
        } catch (error) {
            if (error.errors) {
                const errosArray = [];
                error.errors.forEach((element) => errosArray.push(element));
                return res.status(400).json({ errosArray });
            } else {
                return res.status(error.status).json(error.message);
            }
        }
    }

    //Adicionar favorito
    async addFavorite(req, res) {
        try {
            const { user_id, show_id } = req.body;

            if (!user_id || !show_id) {
                return res
                    .status(404)
                    .send(`Missing ${!user_id ? 'user_id' : 'show_id'}`);
            }
            const findUser = await Users.findByPk(user_id);
            const findShow = await Shows.findByPk(show_id);
            if (!findShow || !findUser) {
                return res
                    .status(404)
                    .send(`${!findShow ? 'Show not found' : 'User not found'}`);
            }

            findUser.addShow(findShow);

            return res.status(200).send('Show add from favorite');
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    //Remover Favorito
    async removeFavorite(req, res) {
        try {
            const { user_id, show_id } = req.body;
            if (!user_id || !show_id) {
                return res
                    .status(404)
                    .send(`Missing ${!user_id ? 'user_id' : 'show_id'}`);
            }

            const findUser = await Users.findByPk(user_id);
            const findShow = await Shows.findByPk(show_id);
            if (!findShow || !findUser) {
                return res
                    .status(404)
                    .send(`${!findShow ? 'Show not found' : 'User not found'}`);
            }

            findUser.removeShow(findShow);

            return res.status(200).send('Show remove to favorite');
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    //Trazer todo os favoritos de um usuario
    async getFavorites(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).send('Id is Missing');
            }

            const result = await Users.findByPk(id, {
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

    //Checar se determinado show e um favorito do usuario passado
    async checkFavorites(req, res) {
        try {
            const { user_id, show_id } = req.query;

            console.log(user_id, show_id, 'Estou aqui');

            if (!user_id || !show_id) {
                return res
                    .status(404)
                    .send(`Missing ${!user_id ? 'user_id' : 'show_id'}`);
            }
            console.log(user_id, show_id, 'Estou aqui');
            const findUser = await Users.findByPk(user_id);
            const findShow = await Shows.findByPk(show_id);
            if (!findShow || !findUser) {
                return res
                    .status(404)
                    .send(`${!findShow ? 'Show not found' : 'User not found'}`);
            }

            console.log(user_id, show_id, 'Estou aqui');
            const result = await Users.findOne({
                where: {
                    id: user_id,
                },
                include: {
                    model: Shows,
                    where: {
                        id: show_id,
                    },
                },
            });

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
}

export default new UsersController();
