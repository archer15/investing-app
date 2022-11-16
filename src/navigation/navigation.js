import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai/";
import MobileNav from "./MobileNav";
const Navigation = ({ user, logout }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div>
        {user ? (
          <div className="block md:hidden px-2 py-2">
            <MobileNav toggle={toggle} setToggle={setToggle} logout={logout} />
            <Link className="flex space-x-2 items-center" to="/" href="">
              <img src="" alt="logo" />
              <span>InvestingApp</span>
            </Link>
            <button className="" onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <AiOutlineMenu
                  className="absolute top-2 right-2 hover:cursor-pointer hover:text-cyan-500 text-cyan-700 "
                  size={40}
                ></AiOutlineMenu>
              ) : (
                <AiOutlineClose
                  className="absolute top-1 right-1 hover:cursor-pointer hover:text-cyan-500 text-white "
                  size={38}
                ></AiOutlineClose>
              )}
            </button>
          </div>
        ) : (
          <div className="block md:hidden py-2 px-2">
            <Link className="flex space-x-2 items-center" to="/" href="">
              <img src="" alt="logo" />
              <span>InvestingApp</span>
            </Link>
            <Link
              to="login"
              href=""
              className="px-3 py-3 right-2 fixed top-2 hover:bg-blue-500/50 rounded"
            >
              Login
            </Link>
          </div>
        )}
      </div>
      <nav className="hidden md:flex max-w-[1640px] mx-auto justify-between items-center py-4 px-16 ">
        <div className="hover:cursor-pointer">
          <Link className="flex space-x-2 items-center" to="/" href="">
            <img src="" alt="logo" />
            <span>InvestingApp</span>
          </Link>
        </div>
        {/* Home icon -> login button -> if logged in logout button */}

        {user !== null ? (
          <div className="flex items-center space-x-4">
            <Link
              className="flex space-x-2 items-center "
              to="profile/"
              href=""
            >
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
    </div>
  );
};

export default Navigation;
