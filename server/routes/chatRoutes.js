import express from 'express'
import {getMessagesByEmailAndCharacterId} from '../controllers/chatController.js'

const router = express.Router()

router.get('/getallchath',getMessagesByEmailAndCharacterId)



export default router