import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constans";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";

function UseNowPlaying() {
  const dispatch = useDispatch();
  async function getNowPlaying() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlaying();
  }, []);
}

export default UseNowPlaying;
