import React from "react";
import Searchbar from "../Component/Searchbar";
import detective from "../Assests/detective-kids.avif";

const Home = () => {
  return (
    <div className=" w-full overflow-x-hidden">
      <img src={detective} className=" rounded-full w-[40%]"></img>
    </div>
  );
};

export default Home;
