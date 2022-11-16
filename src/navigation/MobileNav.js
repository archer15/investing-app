import React from "react";
import { useNavigate } from "react-router-dom";
const MobileNav = ({ toggle, setToggle, logout }) => {
  const navigate = useNavigate();
  //console.log(toggle)
  return (
    <div
      className={`text-white fixed w-[50%] right-[-100%] bg-cyan-700 ${
        toggle ? "right-[0%] " : null
      } duration-[1000ms] 	top-0`}
    >
      {toggle ? (
        <div
          className="z-[-1] opacity-0  fixed w-full h-full"
          onClick={() => setToggle(false)}
        ></div>
      ) : null}
      <div className="bg-cyan-700 grid ">
        <button
          className="hover:bg-cyan-500  py-2 "
          onClick={() => {
            setToggle(false);
            navigate("/profile");
          }}
        >
          Profile
        </button>
        <button
          className="hover:bg-cyan-500 py-2"
          onClick={() => {
            logout();
            setToggle(false);
            navigate("");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
