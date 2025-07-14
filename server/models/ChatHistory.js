import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  characterId: {
    type: String,
    required: true
  },
  messages: [
    {
      sender: {
        type: String,
        required: true
      },
      text: {
        type: String
      }
    }
  ]
});

const ChatHistory = mongoose.model('ChatHistory', userSchema);

export default ChatHistory;
