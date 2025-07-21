import express from 'express'
import {processPayment} from '../controllers/paymentController.js'
import { getKey,paymentVarification } from '../controllers/paymentController.js'


const router = express.Router()

router.post('/process',processPayment)
router.post('/paymentVerification',paymentVarification)
router.get('/getkey',getKey)

export default router