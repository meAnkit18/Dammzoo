import express from 'express'
import multer from 'multer'
import { storage } from '../config/cloudinaryConfig.js'
import Image from '../models/Image.js'

const router = express.Router()
const upload = multer({storage});

router.post('/uploadimg',upload.single('image'), async(req,res)=>{
    try {
        const newImage = new Image({
            imageURL: req.file.path
        })

        await newImage.save();
        res.status(200).json({imageURL: newImage.imageURL})
        
    } catch (error) {
        console.log(error);
         res.status(500).json({ message: 'Upload failed', error: error.message });
    }
})

export default router