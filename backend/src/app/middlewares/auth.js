import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send('Token not available');
    }

    try {
        const decoded = await promisify(jwt.verify)(
            authorization,
            process.env.ACCESS_TOKEN_SECRET
        );

        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};
