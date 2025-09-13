const app = require("../index");
const serverless = require("serverless-http");

// Vercel sẽ gọi function này khi có request
module.exports = serverless(app);