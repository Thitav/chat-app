import dotenv from 'dotenv'
import app from './app'

dotenv.config()

app.listen(process.env.API_PORT, () => {
  console.log(`[+] API listening on port ${process.env.API_PORT}`)
})
