const express = require("express");
const chatRouter = express.Router();
const Chat = require("../models/ChatSchema.js");

chatRouter.post("/api/message/:id", async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  console.log(body);
  const chat = await new Chat({
    user_id: body.user_id,
    target_id: body.target_id,
    date: new Date(),
    message: body.message,
  });
  await chat.save();
  Chat.find({}).then((chats) => {
    console.log(chats);
    response.json(chats);
  });
});
chatRouter.get("/api/messages", async (request, response) => {
  Chat.find({}).then((chats) => {
    console.log(chats);
    response.json(chats);
  });
});

module.exports = chatRouter;
