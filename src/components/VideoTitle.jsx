import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-36 px-11">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex space-x-2">
        <button className=" bg-white text-black px-8 py-1 rounded shadow-sm text-xl">
          Play
        </button>
        <button className="bg-gray-500 opacity-30 text-white px-8 py-1 text-xl shadow-sm">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
