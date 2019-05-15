import React from "react";

const Gif = ({ id, handleSelect }) => {
  return (
    <img
      className="gif"
      src={`https://media.giphy.com/media/${id}/giphy.gif`}
      onClick={() => handleSelect(id)}
    />
  );
};

export default Gif;
