import React, { useEffect, useState } from "react";
import { fetch_messages, send_message } from "../../API/messages";
import { fetch_users } from "../../API/messages";
const LiveChat = ({ user }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const chatForm = {
    user_id: user?._id,

    target: selectedUser,
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
  useEffect(() => {
    fetch_users().then((users) => {
      console.log("user list, ", users);
      setUserList(users);
    });
    fetch_messages().then((res) => {
      console.log(res);
      setChatHistory(res);
    });
  }, []);
  const selectUser = (u) => {
    setSelectedUser(u);
    chatForm.target = u;
    chatForm.message = "";
    document.getElementById("message").value = "";
    document.getElementById("message").focus();
    console.log(chatForm);
  };
  return (
    <div className="">
      <div className="relative text-center italic h-full bg-blue-50 ">
        {selectedUser ? (
          <div>
            {" "}
            Chat with {selectedUser.first_name} {selectedUser.last_name}{" "}
          </div>
        ) : null}
      </div>
      <div className="my-5 ">
        {userList.length < 2 ? (
          <div>Nobody online :(</div>
        ) : (
          userList.map((u, key) => {
            return (
              <div
                className="text-xl font-semibold block border text-white border-blue-700 w-[25%] bg-blue-500 rounded-r-lg"
                key={key}
                onClick={() => selectUser(u)}
              >
                <p className="hover:cursor-pointer hover:bg-blue-700 rounded-r-md py-2 pl-5">
                  {u.first_name} {u.last_name}
                </p>
              </div>
            );
          })
        )}
      </div>
      {selectedUser ? (
        <div
          id="post-form"
          className="mx-5 mb-5 fixed bottom-0 grid grid-col-2 w-full"
        >
          <form className="" onSubmit={(e) => sendChat(e)}>
            <label className="text-lg text-center" htmlFor="message">
              <input
                className="border border-grey-900 rounded-md w-[60%] md:w-[70%] lg:w-[80%] py-2 pl-2"
                type="text"
                autoComplete="off"
                placeholder="Type a message"
                id="message"
                name="message"
                onChange={(e) => {
                  updateFormData(e.target.value);
                }}
                required
              />
            </label>

            <input
              type="submit"
              value="Send"
              className="fixed right-5 hover:cursor-pointer bg-blue-500 px-10 py-2 rounded-lg hover:bg-blue-600 text-white"
            />
          </form>
        </div>
      ) : (
        <p>Please select a user</p>
      )}
    </div>
  );
};

export default LiveChat;
