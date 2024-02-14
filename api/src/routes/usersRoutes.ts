import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import UsersController from '../controllers/UsersController'
import auth from '../middlewares/auth'

const usersRoutes = Router()
const usersController = new UsersController()

usersRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      email: Joi.string(),
      username: Joi.string()
    })
  }),
  auth,
  usersController.findByParams
)
usersRoutes.get('/:id', auth, usersController.findById)

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
      username: Joi.string().required()
    })
  }),
  usersController.create
)
usersRoutes.post(
  '/auth',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required()
    })
  }),
  usersController.auth
)

export default usersRoutes
