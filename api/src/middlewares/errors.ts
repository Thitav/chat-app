import { Request, Response, NextFunction } from 'express'
import AppError from '../errors/AppError'

const errors = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(err.statusCode).json({ error: err.message })
  next()
}

export default errors
