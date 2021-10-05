import { Router } from 'express';
import CategoriaControllers from './app/controllers/CategoriaControllers';
import SessionController from './app/controllers/SessionController';
import ShowControllers from './app/controllers/ShowControllers';
import TagsControllers from './app/controllers/TagsControllers';
import UsersController from './app/controllers/UsersController';
import auth from './app/middlewares/auth';

const router = new Router();

// Sessions Routes
router.post('/get-session', SessionController.store);

//Users Routes
router.post('/add-user', UsersController.store);

//Favorites

router.get('/get-favorites/:id', auth, UsersController.getFavorites);
router.get('/check-favorites', auth, UsersController.checkFavorites);
router.post('/add-favorite', auth, UsersController.addFavorite);
router.post('/remove-favorite', auth, UsersController.removeFavorite);

//Shows Routes
router.get('/get-all', ShowControllers.getAll);
router.get('/get-one/:id', ShowControllers.getOne);

//Categoria Routes
router.get('/get-categorias', CategoriaControllers.getAll);
router.get('/get-categoria/:id', CategoriaControllers.getById);

//Tags
router.get('/get-tags', TagsControllers.getAll);
router.get('/get-tag/:id', TagsControllers.getById);

export default router;
