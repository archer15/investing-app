import React, { useRef, useState } from "react";
import { register } from "../API/user-auth";
import { useNavigate } from "react-router-dom";

const Signup = ({ user }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    try {
      await register(registerData);
      setError(null);
      navigate("/");
    } catch (err) {
      setError(err.response.data.error);
    }

    registerData = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  };

  if (user) {
    return (
      <div className="text-center py-16 text-2xl   ">
        <p className="mb-16">You are already logged in.</p>
        <a
          href="/"
          className="border px-10 py-10 rounded-full text-white bg-black"
        >
          Back to home page
        </a>
      </div>
    );
  } else {
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
  }
};
export default Signup;
