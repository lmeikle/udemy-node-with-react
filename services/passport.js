const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((userModel, done) => {
  done(null, userModel.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(userModel => {
    done(null, userModel);
  });
});

// Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("profile.id", profile.id);

      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record
          done(null, existingUser);
        } else {
          new User({ googleID: profile.id })
            .save()
            .then(user => {
              console.log("saved");
              done(null, user);
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      });
    }
  )
);
