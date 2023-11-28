import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS, GPT_MODEL, USER_ROLE } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/collection?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get movies results"
    const gptQuery =
      "Act as movies recommendations" +
      searchText.current.value +
      "give 5 movies";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: USER_ROLE, content: gptQuery }],
      model: GPT_MODEL,
    });
    if (!gptResults.choices) return; // todo error handling
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[8%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" col-span-9 rounded-md p-1   bg-richblack-25 md:p-4 m-4  "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" bg-blue-10 text-caribbeangreen-900  col-span-3 md: m-4 py-2 px-4 rounded-md"
          onClick={handleGptSearchClick}
        >
          {" "}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
