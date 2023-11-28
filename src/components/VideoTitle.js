import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  const [showMoreInfo, setMoreInfo] = useState(true);

  const handleMoreInfo = () => {
    setMoreInfo(!showMoreInfo);
  };
  return (
    <div className=" w-screen aspect-video absolute text-white bg-gradient-to-r from-black px-0 pt-[20%] md:px-16">
      <h1 className=" text-lg font-semibold md:text-4xl md:font-bold">
        {title}
      </h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/3">
        {" "}
        {showMoreInfo ? overview : false}
      </p>
      <div className="mt-3 md:mt-0">
        <button className="bg-pure-greys-5 text-black hover:opacity-60 p-0 px-2 text-md  md:p-2 text-bold md:px-8 text-lg rounded-sm mx-4   ">
          <div className=" flex items-center  gap-1 md:gap-3">
            <FaPlay /> Play
          </div>
        </button>
        <button className=" hidden md:inline-block bg-richblack-500  text-white  text-bold p-0 px-2 text-md md:p-2  md:px-8 text-lg hover:opacity-60  ">
          <div
            className="flex items-center  gap-1 md:gap-3  opacity-80"
            onClick={handleMoreInfo}
          >
            {" "}
            <CiCircleInfo /> More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
