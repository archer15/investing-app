import React, { useEffect, useState } from "react";
import Navigation from "../navigation/navigation";
import Signup from "../user/signup";
import Login from "../user/login";
import { Route, Routes } from "react-router-dom";
import { logoutBrowser } from "../API/user-auth";
import axios from "axios";
import PostList from "./posts/PostList";
const Dashboard = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    logoutBrowser();
  };
const testFunction = () => {
  console.log('clicked')
  let post = 
    {
      title: "test",
    company_name: "test",
   date: new Date(),
   description: "test",
   asking_price: 100,
   quanitity_total: 100,
   quanitity_remaining: 100,
   status: "active",
    };
  
  axios.post(`http://localhost:3001/api/posts`,post)
  .then(res => {
    console.log(res)
  })
}
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      console.log(
        "found this json object",
        JSON.parse(localStorage.getItem("jwt"))
      );
      setUser(JSON.parse(localStorage.getItem("jwt")).user);
    }
  }, []);
  return (
    <div>
      <Navigation user={user} logout={logout} />
      Dashboard
      
      <PostList/>
      <Routes>
        <Route path="/signup" element={<Signup user={user} />} />

        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
};
export default Dashboard;
