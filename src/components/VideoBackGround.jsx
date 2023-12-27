import { useSelector } from "react-redux";
import UseMovieTrailer from "../hook/UseMovieTrailer";

function VideoBackGround({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);

  UseMovieTrailer(movieId);

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackGround;
