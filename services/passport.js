const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

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
      let user = new User({ googleID: profile.id });

    /**  user.save().then(function(data){
         console.log(data); // check if this executes
      }).catch(function(err){
         console.log(err);
      });*/

      user.save(function(err, product, numAffected) {
        console.log("SAVED", err);
        console.log("SAVED", product);
        console.log("SAVED", numAffected);
        if (err) {
          console.log(err);
          return;
        }
      });
    }
  )
);
