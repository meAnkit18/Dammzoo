import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  characterId:[String],
  connectedCharacters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User
