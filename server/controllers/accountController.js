import User from "../models/User.js";



export const account =async (req, res) => {
  try {
    const user = await User.findById(req.userId)
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
}
