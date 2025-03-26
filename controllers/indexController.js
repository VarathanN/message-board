const db = require("../db");
const asyncHandler = require("express-async-handler");

const getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getMessages();
  res.send(messages);
});

module.exports = { getMessages };
