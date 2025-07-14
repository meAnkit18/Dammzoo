import Scharacter from "../models/Scharacter.js";
import User from "../models/User.js";
import ChatHistory from "../models/ChatHistory.js";

export const addCharacter = async(req,res)=>{
    const {name,imgl,bio,nature} = req.body

    try {
        const newChar = new Scharacter({
            name,
            imgl,
            bio,
            nature
        })
        await newChar.save()
        res.status(201).json({msg:"Character Added Succesfully"})
    } catch (error) {
        res.status(500).json({error:err.message})
    }
}

export const creatChatHistory = async (req,res)=>{

 try {
    const { email, characterId, objChat } = req.body;

    // console.log("Incoming Data:", { email, characterId, objChat });

    const existingChat = await ChatHistory.findOne({ email, characterId });

    if (existingChat) {
      return res.status(200).json({ message: "Chat already exists. No new message added." });
    }

    const newChat = new ChatHistory({
      email,
      characterId,
      messages: [objChat]
    });

    await newChat.save();

    res.status(201).json({ message: "New chat created and message saved.", chat: newChat });

  } catch (error) {
    console.error("🔥 Full Server Error:", error); // full error, not just .message
    res.status(500).json({ error: "Server error", details: error.message });
  }
}


export const getAllPosts = async (req, res) => {
  try {
    const posts = await Scharacter.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const findChar = async (req,res)=>{
  try {
    const product = await Scharacter.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}


export const connectCharacter = async (req, res) => {
  const userId = req.userId;
  const { characterId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.characterId.includes(characterId)) {
      user.characterId.push(characterId);
      await user.save();
    }

    res.status(200).json({ message: "Character connected", characterId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}




export const getMessagesByEmailAndCharacterId = async (req, res) => {
  const { email, characterId } = req.query;

  if (!email || !characterId) {
    return res.status(400).json({ error: "email and characterId are required" });
  }

  try {
    const chatDoc = await ChatHistory.findOne({ email, characterId });

    if (!chatDoc) {
      // If no chat history exists yet, return an empty messages array
      return res.status(200).json({ messages: [] });
    }

    // Return just the messages array
    return res.status(200).json({ messages: chatDoc.messages });
  } catch (err) {
    console.error("Error fetching messages:", err);
    return res.status(500).json({ error: "Server error while fetching messages" });
  }
};






export const addMessageToChat = async (req, res) => {
  const { email, characterId, message } = req.body;

  // Validate input
  if (!email || !characterId || !message || !message.sender) {
    return res.status(400).json({ error: 'email, characterId, and message (with sender) are required' });
  }

  try {
    let chat = await ChatHistory.findOne({ email, characterId });

    if (chat) {
      // Add new message to existing chat history
      chat.messages.push(message);
      await chat.save();
    } else {
      // Create new document if not found
      chat = new ChatHistory({
        email,
        characterId,
        messages: [message]
      });
      await chat.save();
    }

    return res.status(200).json({ success: true, message: 'Message saved successfully' });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ error: 'Server error while saving message' });
  }
};