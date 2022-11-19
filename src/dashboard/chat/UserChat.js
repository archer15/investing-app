import React from "react";
import { fetch_messages, send_message } from "../../API/messages";
const UserChat = (user, selectedUser, chatHistory) => {
  const chatForm = {
    user_id: user?._id,
    target_id: selectedUser?._id,
    message: "",
  };
  const sendChat = (event) => {
    event.preventDefault();
    send_message(user._id, chatForm);
  };
  const updateFormData = (value) => {
    console.log(value);

    chatForm.message = value;
  };
  return (
    <div>
      {chatHistory.length < 1 ? (
        <div> No history, send a message </div>
      ) : (
        <div>messages</div>
      )}
      <div
        id="post-form"
        className="mx-5 mb-5 fixed bottom-0 grid grid-col-2 w-full"
      >
        <form className="" onSubmit={(e) => sendChat(e)}>
          <label className="text-lg" htmlFor="message">
            <input
              className="border border-black rounded-md mx-1 p-1"
              type="text"
              placeholder="Type a message"
              id="message"
              name="message"
              onChange={(e) => {
                updateFormData(e.target.value);
              }}
              required
            />
          </label>

          <input type="submit" value="Send" className="right-0" />
        </form>
      </div>
      )
    </div>
  );
};

export default UserChat;
