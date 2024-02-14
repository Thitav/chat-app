import { Request, Response, NextFunction } from 'express'
import UsersService from '../services/UsersService'

class UsersController {
  async findByParams(req: Request, res: Response): Promise<Response> {
    const usersService = new UsersService()
    const users = await usersService.findByParams(req.query)

    return res.json(users)
  }

  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params

    const usersService = new UsersService()
    try {
      const user = await usersService.findById(id)
      return res.json(user)
    } catch (err) {
      next(err)
    }
  }

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { email, password, username } = req.body

    const usersService = new UsersService()
    try {
      const user = await usersService.create(email, password, username)
      return res.json(user)
    } catch (err) {
      next(err)
    }
  }

  async auth(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { email, password } = req.body

    const usersService = new UsersService()
    try {
      const auth = await usersService.auth(email, password)
      return res.json(auth)
    } catch (err) {
      next(err)
    }
  }
}

export default UsersController
