import { getCustomRepository, Repository } from 'typeorm'
import User from '../entities/User'
import UsersRepository from '../repositories/UsersRepository'
import { createHash } from 'crypto'
import jsonwebtoken from 'jsonwebtoken'
import { instanceToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import AppError from '../errors/AppError'

class UsersService {
  private repository: Repository<User>

  constructor() {
    this.repository = getCustomRepository(UsersRepository)
  }

  async findByParams(params: {
    email?: string
    username?: string
  }): Promise<User[]> {
    const users = await this.repository.find(params)
    return instanceToInstance(users)
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id })
    if (!user) {
      throw new AppError(500, 'no user found')
    }

    return instanceToInstance(user)
  }

  async create(
    email: string,
    password: string,
    username: string
  ): Promise<User> {
    let userExists = await this.repository.findOne({ email })
    if (userExists) {
      throw new AppError(500, 'user with this email already exists')
    }

    userExists = await this.repository.findOne({ username })
    if (userExists) {
      throw new AppError(500, 'user with this username already exists')
    }

    const user = this.repository.create({ email, password, username })
    const validationErrors = await validate(user)
    if (validationErrors.length) {
      throw new AppError(500, validationErrors)
    }
    await this.repository.save(user)

    return instanceToInstance(user)
  }

  async auth(
    email: string,
    password: string
  ): Promise<{ token: string; user: User }> {
    const user = await this.repository.findOne({ email })
    if (!user) {
      throw new AppError(401, 'incorrect credentials')
    }

    password = createHash('sha256').update(password).digest('hex')

    if (user.password !== password) {
      throw new AppError(401, 'incorrect credentials')
    }

    const token = jsonwebtoken.sign({ uid: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400
    })

    return { token, user: instanceToInstance(user) }
  }
}

export default UsersService
