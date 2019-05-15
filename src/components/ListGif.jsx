import React from "react";
import Gif from "./Gif";
const ListGif = ({ gifs, handleSelect }) => {
  return (
    <div className="gif-list">
      {gifs
        ? gifs.map((gif, key) => {
            return <Gif id={gif.id} key={key} handleSelect={handleSelect} />;
          })
        : ""}
    </div>
  );
};

export default ListGif;
