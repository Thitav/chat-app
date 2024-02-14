import express from 'express'
import usersRoutes from './routes/usersRoutes'
import { errors as celebrateErrors } from 'celebrate'
import errors from './middlewares/errors'
import './database'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', usersRoutes)

app.use(celebrateErrors())
app.use(errors)

app.get('/', (req, res) => {
  return res.json({ status: 'running' })
})

export default app
