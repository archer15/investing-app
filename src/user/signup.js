import React, { useRef, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [error, setError] = useState(null);

  let registerData = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const updateFields = (field, value) => {
    registerData[field] = value;
  };

  const submitSignup = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:3001/api/register`, registerData)
      .then((response) => {
        console.log(response.data);
        if (response.error) {
          console.log("error");
          setError(response.error.message);
          return;
        } else {
          setError(null);
        }
      });

    registerData = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  };

  return (
    // create a login page and form, when user submits the form it sends a username, password, first_name, last_name
    // copy this from the navigation page "submitLogin"
    <div>
      <form
        onSubmit={(e) => submitSignup(e)}
        className="flex flex-col items-center border max-w-[1440px] mx-auto px-6 py-12 space-y-4"
      >
        <div className="flex justify-center items-center space-x-3">
          <label className="w-[80px]" for="">
            First Name:
          </label>
          <input
          required
            className="border"
            autoFocus
            type="text"
            onChange={(e) => updateFields("first_name", e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center space-x-3">
          <label className="w-[80px]" for="">
            Last Name:
          </label>
          <input
          required
            className="border"
            type="text"
            onChange={(e) => updateFields("last_name", e.target.value)}
          />
        </div>

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
        <div className={`${error ? "visible" : "invisible"} text-center m-0`}>
          <span>Error: {error}</span>
        </div>
        <div>
          <button
            type="submit"
            className="border bg-green-400 hover:bg-green-300 px-7 py-2 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
