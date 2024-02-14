import { Request, Response, NextFunction } from 'express'
import jsonwebtoken from 'jsonwebtoken'

const auth = (
  req: Request & { uid: string },
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers['x-access-token'] as string
  if (!token) {
    res.status(401).json({ error: 'no token provided' })
    return
  }

  jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: 'invalid token' })
      return
    }

    req.uid = decoded.uid
    next()
  })
}

export default auth
