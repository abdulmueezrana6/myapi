const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Cho tất cả domain
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // Xử lý preflight request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/conf", (req, res) => {
    res.json({e:1,u:'https://jupproject.vercel.app/'}); 
});

app.listen(5000, () => {
  console.log("Running on port 5000!");
});
