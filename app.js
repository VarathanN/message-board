const express = require("express");
const app = express();
// const messageRouter = require("./routes/messageRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
