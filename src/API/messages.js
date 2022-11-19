import axios from "axios";
const URL = "http://localhost:3001/";

export const fetch_messages = () => {
  var messages;
  try {
    messages = axios
      .get("http://localhost:3001/api/messages")
      .then((response) => {
        //console.log(response.data)
        if (response.error) {
          console.log("error");
          return;
        } else {
          const messageList = response.data;
          return messageList;
        }
      });
  } catch (error) {}
  return messages;
};

export const send_message = (id, message) => {
  const log = axios
    .post(`http://localhost:3001/api/message/${id}`, message)
    .then((response) => {
      //console.log(response.data)
      if (response.error) {
        console.log("error");
        return;
      } else {
        const mess = response.data;

        return mess;
      }
    });
  return log;
};

export const fetch_users = () => {
  var users;
  try {
    users = axios.get("http://localhost:3001/api/users").then((response) => {
      //console.log(response.data)
      if (response.error) {
        console.log("error");
        return;
      } else {
        const users = response.data;
        return users;
      }
    });
  } catch (error) {}
  return users;
};
