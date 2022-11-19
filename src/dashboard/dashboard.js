import React, { useEffect, useState } from "react";
import Navigation from "../navigation/navigation";
import Signup from "../user/signup";
import Login from "../user/login";
import { Route, Routes, Link } from "react-router-dom";
import { logoutBrowser } from "../API/user-auth";
import { fetch_posts } from "../API/posting";
import PostList from "./posts/PostList";
import CreatePost from "./posts/CreatePost";
import UserProfile from "./profiles/UserProfile";
import LiveChat from "./chat/LiveChat";
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [postList, setPostList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const logout = () => {
    setUser(null);
    logoutBrowser();
  };

  const loadAllPosts = () => {
    fetch_posts()
      .catch((error) => {
        console.log("error", error);
      })
      .then((res) => {
        let organisedData = res.map((item) => {
          let newDate = item?.date?.slice(0, 10);
          item.date = newDate;
          return item;
        });

        // if(res[1].date) {
        //     let tempDate = res.date
        //    let formattedDate = tempDate.slice(0,11)
        //    console.log(tempDate, formattedDate)
        // }

        console.log(res);
        setPostList(organisedData);
      });
  };

  useEffect(() => {
    console.log("dashboard useeffect");
    if (localStorage.getItem("jwt")) {
      console.log(
        "found this json object",
        JSON.parse(localStorage.getItem("jwt"))
      );
      setUser(JSON.parse(localStorage.getItem("jwt")).user);
    }

    loadAllPosts();
  }, []);
  return (
    <div>
      <Navigation
        user={user}
        logout={logout}
        toggle={toggle}
        setToggle={setToggle}
      />

      <Routes>
        <Route path="/signup" element={<Signup user={user} />} />
        <Route path="/create_post" element={<CreatePost user={user} />} />
        <Route path="/message" element={<LiveChat user={user} />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/profile/" element={<UserProfile user={user} />} />
        <Route path="/profile/1" element={<UserProfile currentUser={user} />} />
        <Route
          path="/"
          element={
            <div>
              <PostList user={user} postList={postList} />
            </div>
          }
        />
      </Routes>
    </div>
  );
};
export default Dashboard;
