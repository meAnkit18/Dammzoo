// config/passport-setup.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js'; // Make sure the path to your User model is correct

passport.use(
  new GoogleStrategy(
    {
      // Options for the Google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback', // Must match the one in Google Console
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // This function is called when a user is successfully authenticated by Google
      try {
        // Check if the user already exists in your database
        let existingUser = await User.findOne({ email: profile.emails[0].value });

        if (existingUser) {
          // If they exist, pass the user to the next step
          done(null, existingUser);
        } else {
          // If they don't exist, create a new user in your database
          const newUser = new User({
            email: profile.emails[0].value,
            // You can add other profile info here if your schema supports it
            // e.g., googleId: profile.id, name: profile.displayName
          });
          await newUser.save();
          done(null, newUser);
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);