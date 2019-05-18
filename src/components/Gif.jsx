import React, { Fragment } from "react";

const Gif = ({ id, handleSelect }) => {
  return (
    <Fragment>
      {id !== "" ? (
        <img
          className="gif"
          src={`https://media.giphy.com/media/${id}/giphy.gif`}
          onClick={() => handleSelect(id)}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Gif;
