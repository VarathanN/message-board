const { Router } = require("express");
const indexRouter = Router();
const { getMessages } = require("../controllers/indexController");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
})

indexRouter.get("/message/:id", (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];

  if(!message){
    res.status("404").send("message not found");
  }

  res.render("message", {message});
})

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
