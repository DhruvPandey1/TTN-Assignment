const express = require("express");
const router = express.Router();

let users = [];

router.post("/create", (req, res) => {
  try {
    const { userName, password, firstName, lastName } = req.body;

    const user = { userName, password, firstName, lastName };

    users.push(user);

    res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/search", (req, res) => {

  const { userName } = req.query;

  if (!userName) {
    return res.status(400).json({ message: "userName query required" });
  }

  const filtered = users.filter(u =>
    u.userName.toLowerCase().includes(userName.toLowerCase())
  );

  res.json(filtered);
});

module.exports = router;