import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  const [showMoreInfo, setMoreInfo] = useState(true);

  const handleMoreInfo = () => {
    setMoreInfo(!showMoreInfo);
  };
  return (
    <div className=" w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3"> {showMoreInfo ? overview : false}</p>
      <div className="">
        <button className="bg-pure-greys-5 text-black p-2 text-bold  px-8 text-lg rounded-sm mx-4   hover:opacity-60">
          <div className="flex items-center gap-3">
            <FaPlay /> Play
          </div>
        </button>
        <button className=" bg-richblack-500  text-white  text-bold p-2  px-8 text-lg hover:opacity-60  ">
          <div
            className="flex items-center gap-3  opacity-80"
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
