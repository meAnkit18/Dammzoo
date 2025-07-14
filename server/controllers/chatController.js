import ChatHistory from "../models/ChatHistory.js";



export const getMessagesByEmailAndCharacterId = async (req, res) => {

  const { email, characterId } = req.query;
 
  try {

    if (!email || !characterId) {
      return res.status(400).json({ error: "Email and characterId are required" });
    }


    const chat = await ChatHistory.findOne({email,characterId});


    const cleanedMessages = chat?.messages?.slice(1).map(({ sender, text }) => ({ sender, text })) || [];

    res.json({ messages: cleanedMessages });

    // const messages = chat.flatMap(chat => chat.messages);
    // res.json(messages);
  } catch (error) {
    console.error("Error fetching chat history:", error.message);
    return res.status(500).json({ error: 'Server error while fetching messages' });
  }
};
