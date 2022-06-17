import React from "react";

//GIF
import Spinner from "../gif/Spinner.gif";

const Loader = () => {
  return (
    <div>
      <img src={Spinner} height="100%" width="100%" alt="Loading GIF" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
