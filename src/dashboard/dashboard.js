import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
import Signup from "../user/Signup";
import Login from "../user/Login";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <Navigation user={user} logout={logout} />
      Dashboard
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </div>
  );
};
export default Dashboard;
