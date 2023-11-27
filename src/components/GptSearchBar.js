import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-md  bg-richblack-25"
          placeholder="What would you like to watch today ??"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-blue-10 text-caribbeangreen-900 rounded-md">
          {" "}
          Search{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
