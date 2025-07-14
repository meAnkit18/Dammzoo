import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import addCharmin from './routes/addCharmin.js'


dotenv.config()



const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});


app.use('/api/auth', authRoutes)
app.use('/api/add',addCharmin)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`)
    })
  })
  .catch(err => console.error('MongoDB connection error:', err))
