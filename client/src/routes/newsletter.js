const express = require("express");
const Newsletter = require("../controllers/newsletter");

const router = express.Router();

//INDEX
router.get("/", Newsletter.index);

//STORE
router.post("/", Newsletter.store);

module.exports = router;
