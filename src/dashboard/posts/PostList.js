import React from "react";
import { useEffect, useState } from "react";
import { fetch_posts, list_post } from "../../API/posting";
import { Link } from "react-router-dom";
const PostList = ({ user, postList }) => {
  return (
    <div className="max-w-[1440px] mx-auto  py-12 px-12 md:py-6 md:px-12 sm:py-4 sm:px-2">
      <Link
        to="/create_post"
        href=""
        className="text-center border py-1 px-1 text-md md:px-4 md:py-4 sm:px-2 sm:py-2 md:text-lg  bg-blue-600 rounded-lg text-white disabled:opacity-50"
        disabled={user == null}
      >
        List your business
      </Link>
      {postList ? (
        postList.map((post, key) => {
          return (
            <div
              className="border-solid border-blue-400 border-2 py-12 px-4 my-10  space-y-4 rounded-md"
              key={key}
            >
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
                  className={`absolute left-[5%] md:left-[10%] py-2 px-4 rounded-md text-white ${
                    post.status === "active" ? "bg-green-500" : "bg-red-600"
                  }`}
                >
                  {post.status}
                </div>
                <button
                  onClick={() => console.log("test")}
                  className="border py-4 px-8 text-md md:px-32  md:text-lg  bg-blue-600 rounded-lg text-white disabled:opacity-50"
                  disabled={user == null}
                >
                  Invest
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>no current posts </div>
      )}
      {/* {postList.map((item, index) =>  <p><p />)}  */}
    </div>
  );
};

export default PostList;
