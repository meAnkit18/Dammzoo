
// import jwt from 'jsonwebtoken'

// const authm = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]
//   if (!token) return res.status(401).json({ error: 'No token provided' })

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     req.user = decoded
//     next()
//   } catch (err) {
//     res.status(401).json({ error: 'Invalid token' })
//   }
// }

// export default authm


import jwt from "jsonwebtoken";

const authm = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; 
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
export default authm
