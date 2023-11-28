import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
  const handleGptSearchClick = () => {
    // toggle GPT Search page
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div className="absolute w-screen px-10 py-4 bg-gradient-to-b  from-black z-10  flex items-center justify-between ">
      <img className="w-48" src={LOGO} alt="logo-netflix" />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="border m-1  text-center bg-black shadow-md  text-pure-greys-600 font-bold "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="border m-1 mx-4 px-3 bg-black shadow-md  text-caribbeangreen-400 font-bold rounded-md"
          >
            {showGptSearch ? (
              "Home"
            ) : (
              <div className="flex items-center gap-2">
                <IoSearch></IoSearch>
                Search
              </div>
            )}
          </button>
          {showProfile && (
            <>
              <button
                onClick={handleSignOut}
                className="border m-1 mx-4 px-3 bg-black shadow-md text-red-5 font-bold rounded-md"
              >
                {" "}
                Sign Out
              </button>
            </>
          )}
          <img
            className="w-10 h-10 m-1"
            src={USER_AVATAR}
            alt="user-logo "
            onClick={handleProfileClick}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
