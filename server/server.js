import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import addCharmin from './routes/addCharmin.js'
import chatRoutes from './routes/chatRoutes.js'
import uploadRouter from './routes/uploadRouter.js'
import Razorpay from 'razorpay'
import paymentRouter from './routes/paymetRouter.js'
import passport from 'passport';
import './config/passport-setup.js';


dotenv.config()



const app = express()

export const instance = new Razorpay({
  key_id:process.env.RKEY_ID,
  key_secret:process.env.RKEY_SECRET
})
app.use(passport.initialize());

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/auth', authRoutes)
app.use('/api/add',addCharmin)
app.use('/api/chatroutes',chatRoutes)
app.use('/api/upload',uploadRouter)
app.use('/api/payment',paymentRouter)
app.use('/api/auth', authRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`)
    })
  })
  .catch(err => console.error('MongoDB connection error:', err))
