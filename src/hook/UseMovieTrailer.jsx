import React, { useEffect } from "react";
import { addTrailerVideos } from "../utils/MoviesSlice";
import { API_OPTIONS } from "../utils/Constans";
import { useDispatch } from "react-redux";

function UseMovieTrailer(movieId) {
  const dispatch = useDispatch();

  async function getMovieVideo() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US `,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  }

  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default UseMovieTrailer;
