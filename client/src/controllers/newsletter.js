const Newsletter = require("../models/newsletter");

// GET api/newsletter
//  Returns all newsletter subsribed emails

exports.index = async (req, res) => {
  try {
    const newsletter = await Newsletter.find();

    res.status(200).json({ newsletter: newsletter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST api/newsletter
//  create newsletter subscription

exports.store = async (req, res) => {
  try {
    const newNewsletter = new Newsletter({ ...req.body });
    const newsletter = await newNewsletter.save();

    res.status(200).json({
      newsletter: newsletter,
      message: "Thank you for subscribing to our Newsletter.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
