import React from "react";
import { fetch_user_post, fetch_user_investments } from "../../API/posting";
import { useState, useEffect } from "react";
import PostList from "../posts/PostList";
import InvestmentHistory from "../posts/invest/InvestmentHistory";
const UserProfile = ({ user }) => {
  const [postList, setPostList] = useState([]);
  const [investmentList, setInvestmentList] = useState([]);
  console.log("id ", user);
  const loadUserPosts = (id) => {
    fetch_user_post(id)
      .catch((error) => {
        console.log("error", error);
      })
      .then((res) => {
        let organisedData = res.map((item) => {
          let newDate = item?.date?.slice(0, 10);
          item.date = newDate;
          return item;
        });
        console.log(res);
        setPostList(organisedData);
      });
  };

  const loadUserInvestments = (id) => {
    fetch_user_investments(id)
      .catch((error) => {
        console.log("error", error);
      })
      .then((res) => {
        let organisedData = res.map((item) => {
          let newDate = item?.investment_date?.slice(0, 10);
          item.date = newDate;
          return item;
        });

        // if(res[1].date) {
        //     let tempDate = res.date
        //    let formattedDate = tempDate.slice(0,11)
        //    console.log(tempDate, formattedDate)
        // }

        console.log(res);
        setInvestmentList(organisedData);
      });
  };

  useEffect(() => {
    if (user) {
      loadUserPosts(user._id);
      loadUserInvestments(user._id);
    }
  }, [user]);
  if (user) {
    return (
      <div>
        <div className="text-center text-lg border w-[400px] mx-auto py-5 ">
          User Profile
          <div> {user.first_name}</div>
          <div> {user.last_name} </div>
          <div> {user.email} </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="text-center">
            Your posts
            <PostList user={user} postList={postList} />
          </div>
          <div className="text-center">
            Your Investments
            <div className="">
              <InvestmentHistory
                user={user}
                investmentList={investmentList}
              ></InvestmentHistory>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserProfile;
