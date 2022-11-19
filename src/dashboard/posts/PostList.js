import React from "react";
import { useEffect, useState } from "react";
import { fetch_posts, list_post } from "../../API/posting";
import { Link } from "react-router-dom";
import Invest from "./invest/Invest";
import { AiOutlineExpandAlt } from "react-icons/ai/";
import PostPopup from "./invest/PostPopup";
const PostList = ({ user, postList }) => {
  const [toggleInvest, setToggleInvest] = useState(false);
  const [selectedInvestPost, setSelectedInvestPost] = useState(null);

  const toggleAndSetInvestmentPost = (post) => {
    setSelectedInvestPost(post);
    setToggleInvest(!toggleInvest);
  };
  const openFullPost = (post) => {};
  return (
    <div className="max-w-[1440px] mx-auto  py-12 px-12 md:py-6 md:px-12 sm:py-4 sm:px-2">
      {user ? (
        <Link
          to="/create_post"
          href=""
          className="text-center border py-1 px-1 text-md md:px-4 md:py-4 sm:px-2 sm:py-2 md:text-lg  bg-blue-600 rounded-lg text-white disabled:opacity-50"
          disabled={user == null}
        >
          List your business
        </Link>
      ) : null}
      {postList.length > 0 ? (
        postList.map((post, key) => {
          return (
            <div
              className="border-solid border-blue-400 border-2 py-12 px-4 my-10  space-y-4 rounded-md"
              key={key}
            >
              <AiOutlineExpandAlt
                className="relative hover:cursor-pointer hover:text-blue-500  scale-125"
                onClick={() => openFullPost(post)}
              />
              <div className="text-center text-2xl font-medium  ">
                {post.company_name}
              </div>
              <div className="grid-cols-2 grid mx-10 ">
                <div className="flex-col flex space-y-2 ">
                  <span className="text-xl font-semibold">{post.title}</span>
                  <p>{post.description}</p>
                  <span>{post.date}</span>
                </div>
                <div className="text-right space-y-2">
                  <div className="">${post.asking_price}</div>
                  <p>{post.quantity_total}</p>
                  <div>{post.quantity_remaining}</div>
                </div>
              </div>

              <div className="relative text-center flex justify-center items-center">
                <div
                  className={`absolute left-[5%] md:left-[10%] py-1 px-4 rounded-md text-white ${
                    post.status === "active" ? "bg-green-500" : "bg-red-600"
                  }`}
                >
                  {post.status}
                </div>
                <button
                  onClick={() => toggleAndSetInvestmentPost(post)}
                  className="border py-4 px-8 text-md md:px-32  md:text-lg  bg-blue-600 rounded-lg text-white disabled:opacity-50"
                  disabled={user == null || post.status === "Completed"}
                  hidden={user?._id === post?.user_id}
                >
                  Invest
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="py-10">You have no current posts </div>
      )}

      {toggleInvest ? (
        <Invest
          toggleInvest={setToggleInvest}
          post={selectedInvestPost}
          user={user}
        />
      ) : null}

      {/* {postList.map((item, index) =>  <p><p />)}  */}
    </div>
  );
};

export default PostList;
