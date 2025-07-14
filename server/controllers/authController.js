// import nodemailer from 'nodemailer'
// import User from '../models/User.js'

// const OTPStorage = {}

// export const sendOtp = async (req, res) => {
//   const { email } = req.body
//   const otp = Math.floor(100000 + Math.random() * 900000).toString()
//   OTPStorage[email] = otp
// console.log('Sending email to:', email)
// console.log('Using user:', process.env.EMAIL_USER)

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   })

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Your OTP Code',
//     text: `Your OTP is ${otp}`
//   }

//   try {
//     await transporter.sendMail(mailOptions)
//     res.status(200).json({ message: 'OTP sent' })
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to send OTP', details: err })
//   }
// }

// export const verifyOtp = async (req, res) => {
//   const { email, otp } = req.body

//   if (OTPStorage[email] !== otp) {
//     return res.status(400).json({ error: 'Invalid OTP' })
//   }

//   try {
//     let user = await User.findOne({ email })
//     if (!user) {
//       user = new User({ email })
//       await user.save()
//     }

//     delete OTPStorage[email]
//     res.status(200).json({ message: 'Verified', user, token: 'demo-token' })
//   } catch (err) {
//     res.status(500).json({ error: 'Server error', details: err })
//   }
// }


import jwt from 'jsonwebtoken' 
import nodemailer from 'nodemailer'
import User from '../models/User.js'

const OTPStorage = {}

export const sendOtp = async (req, res) => {
  const { email } = req.body
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  OTPStorage[email] = otp

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}`
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'OTP sent' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to send OTP', details: err })
  }
}

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body

  if (OTPStorage[email] !== otp) {
    return res.status(400).json({ error: 'Invalid OTP' })
  }

  try {
    let user = await User.findOne({ email })
    if (!user) {
      user = new User({ email })
      await user.save()
    }

    // 🔐 Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    )

    delete OTPStorage[email]

    res.status(200).json({
      message: 'OTP verified successfully',
      token,
      user: { id: user._id, email: user.email }
    })
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message })
  }
}
