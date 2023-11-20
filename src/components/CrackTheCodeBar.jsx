/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const CrackTheCodeBar = () => {
  const user = false;
  return (
    <div className="bg-blue-950 flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold text-white">
        <Link to="/">Crack The Code</Link>
      </h1>
      <div className="flex justify-center items-center space-x-4 text-gray-300 font-semibold">
        <h3>Business</h3>
        <h3>Academic</h3>
        <h3>Company</h3>
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4 text-white font-semibold">
        {user ? (
          <h3>
            <Link to="/createPost">Write</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">SignIn</Link>
          </h3>
        )}
        {user ? (
          <h3>
            <Link to="/register">Profile</Link>
          </h3>
        ) : (
          <h3 className="bg-customeGreen px-5  py-3 text-black">
            <Link to="/register">Get Started</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default CrackTheCodeBar;
