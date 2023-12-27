import UseNowPlaying from "../hook/UseNowPlaying";
import Header from "./Header";
import MainCointainer from "./MainCointainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  UseNowPlaying();
  return (
    <div>
      <Header />
      <MainCointainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
