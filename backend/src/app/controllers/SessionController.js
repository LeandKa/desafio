import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import Users from '../models/Users';

class SessionController {
    //Fazer o login
    async store(req, res) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().min(3).max(12).required(),
            });

            await schema.validate(req.body, {
                strict: false,
                abortEarly: false,
            });

            const { email, password } = req.body;

            const findEmail = await Users.findOne({
                where: {
                    email,
                },
            });
            if (!findEmail) {
                let err = new Error('Email not exists');
                err.status = 404;
                throw err;
            }

            const check = await findEmail.checkPassword(password);
            if (!check) {
                let err = new Error('Password not match');
                err.status = 400;
                throw err;
            }

            const { id, name } = findEmail;
            return res.status(200).json({
                id,
                name,
                email,
                accessToken: jwt.sign(
                    {
                        id,
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: '7d',
                    }
                ),
            });
        } catch (error) {
            if (error.errors) {
                const errosArray = [];
                error.errors.forEach((element) => errosArray.push(element));
                return res.status(400).json({ errosArray });
            } else {
                return res.status(error.status).send(error.message);
            }
        }
    }
}

export default new SessionController();
