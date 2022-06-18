import React from "react";

//GIF
import Spinner from "../gif/spinner.gif";

const Loader = () => {
  return (
    <div>
      <img src={Spinner} alt="Loading GIF" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
