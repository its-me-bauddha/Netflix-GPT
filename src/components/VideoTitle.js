import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4"> {overview}</p>
      <div>
        <button className="bg-pure-greys-100 text-black p-2 text-bold  px-8 text-lg rounded-lg mx-4 ">
          ▶️ Play
        </button>
        <button className="bg-pure-greys-500 text-white  text-bold p-2  px-8 text-lg rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
