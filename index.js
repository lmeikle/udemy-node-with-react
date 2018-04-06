const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
/**
function createConnection (dbURL, options) {
    var db = mongoose.createConnection(dbURL, options);

    db.on('error', function (err) {
        // If first connect fails because mongod is down, try again later.
        // This is only needed for first connect, not for runtime reconnects.
        // See: https://github.com/Automattic/mongoose/issues/5169
        if (err.message && err.message.match(/failed to connect to server .* on first connect/)) {
            console.log(new Date(), String(err));

            // Wait for a bit, then try to connect again
            setTimeout(function () {
                console.log("Retrying first connect...");
                db.openUri(dbURL).catch(() => {});
                // Why the empty catch?
                // Well, errors thrown by db.open() will also be passed to .on('error'),
                // so we can handle them there, no need to log anything in the catch here.
                // But we still need this empty catch to avoid unhandled rejections.
            }, 20 * 1000);
        } else {
            // Some other error occurred.  Log it.
            console.error(new Date(), String(err));
        }
    });

    db.once('open', function () {
        console.log("Connection to db established.");
    });

    return db;
}

// Use it like
let db = createConnection(keys.mongoURI, {});
exports.db = db;

require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
*/

mongoose.connect(keys.mongoURI);
mongoose.connection.on('error', (err) => {
  console.log("shit", err)
});
mongoose.set('debug', true)

const app = express();

authRoutes(app);

// tells node to listen for traffic on port xxxx
// heroku will set the port in the node environment variables, if running locally will use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
