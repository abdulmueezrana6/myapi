const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "This is Express running on Vercel 🚀" });
});

module.exports = app;