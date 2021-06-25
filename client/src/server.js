const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({ path: __dirname + "/.env" });
const DIST_DIR = path.resolve("public/build/");

let PORT = process.env.PORT || 3000;

// create exp. app
const app = express();
app.use(express.static(DIST_DIR));

// connect to DB
const connUri = process.env.MONGO_URI;

mongoose.promise = global.Promise;
mongoose.connect(connUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB --  database connected"));
connection.on("error", (err) => {
  console.log("MongoDB connection error. " + err);
  process.exit();
});

// define routes
require("./routes/index")(app);

// chatch all and forward it to index whe react router takes over
app.get("/*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// binds and listens for connection
app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT + "/")
);
