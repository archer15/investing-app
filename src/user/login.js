import React, { useState } from "react";
import axios from "axios";
const Login = ({ setUser }) => {
  const [error, setError] = useState(null);

  let loginData = {
    email: "",
    password: "",
  };

  const updateFields = (field, value) => {
    loginData[field] = value;
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(loginData);

    await axios
      .post(`http://localhost:3001/api/login`, loginData)
      .then((response) => {
        console.log(response.data);
        if (response.error) {
          console.log("error");
          setError(response.error.message);
          return;
        } else {
          setUser(response.data.user);
          console.log(response.data.user);
          setError(null);
        }
      });
    loginData = {
      email: "",
      password: "",
    };
  };

  return (
    // create a login page and form, when user submits the form it sends a username, password, first_name, last_name
    // copy this from the navigation page "submitLogin"
    <div>
      <form
        onSubmit={(e) => submitLogin(e)}
        className="flex flex-col items-center border max-w-[1440px] mx-auto px-6 py-12 space-y-4"
      >
        <div className="flex justify-center items-center space-x-3">
          <label className="w-[80px]" for="">
            Email:
          </label>
          <input
            required
            className="border"
            type="email"
            onChange={(e) => updateFields("email", e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center space-x-3">
          <label className="w-[80px]" for="">
            Password:
          </label>
          <input
            required
            className="border"
            type="password"
            onChange={(e) => updateFields("password", e.target.value)}
          />
        </div>
        <div className={`${error ? "visible" : "invisible"} text-center`}>
          <span>Error: {error}</span>
        </div>
        <div>
          <button
            type="submit"
            className="border bg-green-400 hover:bg-green-300 px-7 py-2 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
