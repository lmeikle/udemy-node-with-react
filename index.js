const express = require("express");

const app = express();

// This is a route hander that is listening for http GET requests
// could also use post, put, delete, patch
// the slash is effectively us visiting localhost:5000/ (although we never write the slash)
// eg. localhost:5000/greeting would be app.get('/greeting')
app.get("/", (req, res) => {
  // immediately send some JSON back to whoever made the request
  res.send({ hi: "there" });
});

// tells node to listen for traffic on port xxxx
// heroku will set the port in the node environment variables, if running locally will use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
