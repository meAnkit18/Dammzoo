import express from 'express'
import {addCharacter,getAllPosts,connectCharacter,findChar,creatChatHistory,addMessageToChat } from '../controllers/characterController.js'
import  authm  from '../middleware/authm.js';


const router  = express.Router()

router.post('/admin',authm,addCharacter);
router.get('/fetchchar',getAllPosts);
router.get('/:id',findChar);
router.post('/connect',authm,connectCharacter);
router.post('/chathistory',authm,creatChatHistory);
// router.get('/messages', getMessagesByEmailAndCharacterId);
router.post('/addmessage', addMessageToChat);


export default router
