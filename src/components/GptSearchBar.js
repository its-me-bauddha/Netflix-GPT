import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);

  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-md  bg-richblack-25"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-blue-10 text-caribbeangreen-900 rounded-md">
          {" "}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
