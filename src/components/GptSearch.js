import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className=" fixed -z-40 md:fixed ">
        <img
          className=" h-screen object-cover md: w-screen"
          src={BG_IMAGE_URL}
          alt="netflix-bg"
        />
      </div>
      <div>
        {/**
         * GptSearch
         *    GPT Search bar
         *    GPT Movie Suggestion
         */}

        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
