import React from "react";

import { GoStopwatch } from "react-icons/go";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardWrapper  bg-gray-100 py-6 px-3 rounded shadow-lg  ">
        {/* card top icon starts  */}
        <div className="cardTop  mb-3  flex justify-center items-center ">
          <GoStopwatch className=" text-5xl  " />
        </div>
        {/* card top icon ends  */}

        {/* card middle heading  starts  */}
        <div className="cardMiddle   text-2xl mb-3 ">
          <h1 className=" text-center font-medium ">Saves Time </h1>
        </div>
        {/* card middle heading  ends  */}

        {/* card bottom detail  starts  */}
        <div className="cardBottom  w-[98%] sm:w-[96%] md:w-[94%] xmd:w-[90%] m-auto   ">
          <h1>
            Automated code conversion means you don't have to spend hours
            manually rewriting code in a different language.{" "}
          </h1>
        </div>
        {/* card bottom detail  ends  */}
      </div>
    </div>
  );
};

export default Card;
