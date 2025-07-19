import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
    imageURL: String,
    uploadedAt:{type:Date, default:Date.now},
})

const Image = mongoose.model('Image',ImageSchema)
export default Image