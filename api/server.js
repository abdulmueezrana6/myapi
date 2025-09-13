const app = require("../index");
const serverless = require("serverless-http");

module.exports = (req, res) => {
  const handler = serverless(app);
  return handler(req, res);
};