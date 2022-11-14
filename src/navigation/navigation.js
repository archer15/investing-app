
import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user, logout }) => {
  return (
    <nav className="max-w-[1640px] mx-auto flex justify-between items-center py-4 px-16 ">
      <div className="hover:cursor-pointer">
        <Link className="flex space-x-2 items-center" to="/" href="">
          <img src="" alt="logo" />
          <span>InvestingApp</span>
        </Link>
      </div>
      {/* Home icon -> login button -> if logged in logout button */}

      {user !== null ? (
        <div className="flex items-center space-x-4">
          <Link className="flex space-x-2 items-center "
          to="profile/"
          href="">
            <img className="rounded-full" src="" alt="displayPicture" />{" "}
            <span>{user?.first_name}</span>
          </Link>

          <Link
            to=""
            onClick={() => {
              logout();
            }}
            className="px-3 py-3 hover:bg-blue-500/50 rounded"
          >
            Log out
          </Link>
        </div>
      ) : (

        <div>
          <Link
            to="signup"
            href=""
            className="px-3 py-3 hover:bg-blue-500/50 border-r rounded"
          >
            Sign Up
          </Link>

          <Link
            to="login"
            href=""
            className="px-3 py-3 hover:bg-blue-500/50 rounded"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
