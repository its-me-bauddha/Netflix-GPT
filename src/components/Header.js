import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign In
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-10 py-4 bg-gradient-to-b  from-black z-10  flex items-center justify-between ">
      <img className="w-48" src={LOGO} alt="logo-netflix" />
      {user && (
        <div className="flex">
          <img className="w-10 h-10 m-1" src={USER_AVATAR} alt="user-logo" />
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
