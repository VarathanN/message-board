const express = require("express");
const app = express();
// const messageRouter = require("./routes/messageRouter");
const indexRouter = require("./routes/indexRouter");

app.get("/", indexRouter);
// app.get("/newmessage", messageRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
