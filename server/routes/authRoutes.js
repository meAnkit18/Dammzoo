import express from 'express'
import { sendOtp, verifyOtp } from '../controllers/authController.js'
import  authm  from '../middleware/authm.js'
import { account } from '../controllers/accountController.js'

const router = express.Router()

router.post('/send-otp', sendOtp)
router.post('/verify-otp', verifyOtp)
router.get('/account', authm ,account)

export default router
