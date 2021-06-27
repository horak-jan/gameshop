const path = require("path");
const INDEX = path.resolve("public/build/index.html");

const newsletter = require("./newsletter");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(INDEX);
  });

  app.use("/api/newsletter", newsletter);
};
