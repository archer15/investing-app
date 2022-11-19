require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRouter = require("./controllers/api");
const postRouter = require("./controllers/posts");
const userRouter = require("./controllers/users");
const chatRouter = require("./controllers/liveChat");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("build"));
app.use(apiRouter);
app.use(postRouter);
app.use(userRouter);
app.use(chatRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
