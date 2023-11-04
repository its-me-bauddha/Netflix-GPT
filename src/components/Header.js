import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-10 py-4 bg-gradient-to-b  from-black z-10  flex items-center justify-between ">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-netflix"
      />
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 m-1"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="user-logo"
          />
          <button
            onClick={handleSignOut}
            className="border m-1 px-2 bg-black shadow-md text-red-5 font-bold rounded-md"
          >
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
