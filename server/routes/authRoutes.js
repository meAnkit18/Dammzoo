import express from 'express'
import passport from 'passport'; // 1. Import passport
import jwt from 'jsonwebtoken';
import { sendOtp, verifyOtp } from '../controllers/authController.js'
import  authm  from '../middleware/authm.js'
import { account } from '../controllers/accountController.js'

const router = express.Router()

router.post('/send-otp', sendOtp)
router.post('/verify-otp', verifyOtp)
router.get('/account', authm ,account)
router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// 4. The callback route that Google redirects to after successful login
router.get(
    '/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: `${process.env.FRONTEND_URL}/login` }),
    (req, res) => {
        // At this point, passport has authenticated the user and `req.user` is available.
        const user = req.user;

        // Create a JWT for our application
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        // Redirect the user back to the frontend with the token
        res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${token}`);
    }
);

export default router
