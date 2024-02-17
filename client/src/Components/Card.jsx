import React from "react";

import { GoStopwatch } from "react-icons/go";

const Card = ({ data }) => {
  const { icon, heading, description } = data;

  return (
    <div className="cardContainer w-[95%] xsm:w-[85%] sm:w-[100%] m-auto sm:m-0 ">
      <div className="cardWrapper min-h-[18rem] bg-gray-100 py-6 px-3 rounded shadow-lg  ">
        {/* card top icon starts  */}
        <div className="cardTop  mb-5  flex justify-center items-center text-4xl ">
          {icon}
        </div>
        {/* card top icon ends  */}

        {/* card middle heading  starts  */}
        <div className="cardMiddle   text-2xl mb-6 ">
          <h1 className=" text-center font-medium "> {heading} </h1>
        </div>
        {/* card middle heading  ends  */}

        {/* card bottom detail  starts  */}
        <div className="cardBottom  w-[98%] sm:w-[96%] md:w-[94%] xmd:w-[90%] m-auto text-center   ">
          <h1>{description}</h1>
        </div>
        {/* card bottom detail  ends  */}
      </div>
    </div>
  );
};

export default Card;
