import React, { useState } from "react";
import axios from "axios";
import { login } from "../API/user-auth";
import { redirect  } from "react-router-dom";
const Login = ({ user, setUser }) => {
  const [error, setError] = useState(null);

  let loginData = {
    email: "",
    password: "",
  };

  const updateFields = (field, value) => {
    loginData[field] = value;
  };

  const submitLogin = async (e) => {
    var tempUser
    e.preventDefault()
    let resUser = await login(loginData).catch((error) => {
        console.log("error", error)
        setError(error.response.data.error)
    })
    if(resUser.user) {
        setUser(resUser.user)
        setError(null)
        localStorage.setItem('jwt', JSON.stringify(resUser));
        
    }
    
    
    
    
  };
  if(user) {
    return (<div className="text-center py-16 text-2xl   ">
        <p className="mb-16">You are already logged in.</p>
         <a href="/" className="border px-10 py-10 rounded-full text-white bg-black">Back to home page</a>
      </div>)
  } else {
    return (<div>
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
      </div>)
  }
    
};
export default Login;
