import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      {/**
       * GptSearch
       *    GPT Search bar
       *    GPT Movie Suggestion
       */}
      <div className="absolute -z-10">
        <img src={BG_IMAGE_URL} alt="netflix-bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
