import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import { connectDB } from './config/db.js'
import userRoutes from './routes/users.js'
import { errorHandler } from './middlewares/error.js'

// Connect to DB
await connectDB()

// Express App
const app = express()
const port = process.env.PORT || 5000

// middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users', userRoutes)

app.use('/api/products', (req, res) => {
  return res.status(200).json({
    message: 'This is new feature change, a new route for products'
  })
})

app.use(errorHandler)

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
)

process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`)
  server.close(() => process.exit(1))
})
