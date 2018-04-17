const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongoURI);
mongoose.connection.on("error", err => {
  console.log("There was a mongoose connection error:", err);
});
mongoose.set("debug", true);

const app = express();

// use lets us set some middleware - take the request and do something to it (pre-processing of the request)
// these are configured to happen on every single request/route, but can make them only happen on certain routes if we wanted
// request -> app -> middleware -> get/put etc.. -> response
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

// tells node to listen for traffic on port xxxx
// heroku will set the port in the node environment variables, if running locally will use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
