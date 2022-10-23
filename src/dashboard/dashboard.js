import React, { useEffect, useState } from "react";
import Navigation from "../navigation/navigation";
import Signup from "../user/signup";
import Login from "../user/login";
import { Route, Routes } from "react-router-dom";
import { logoutBrowser } from "../API/user-auth";
const Dashboard = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    logoutBrowser();
  };

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
