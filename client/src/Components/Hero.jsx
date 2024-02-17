import React from "react";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroWrapper pt-6  ">
        {/* hero heading starts  */}
        <h1 className="   text-5xl font-medium text-center w-[60%] m-auto ">
          Transform code with just one click.
        </h1>
        {/* hero heading ends  */}

        {/* hero title starts  */}
        <p className="  mt-9 text-xl w-[50%] text-center m-auto ">
          CodeCompanion made super simple to save you hours of time from
          learning a completely new language.
        </p>
        {/* hero title starts  */}

        {/* project image starts  */}
        <div className="projectImage bg-green-300 mt-12 flex flex-col justify-center items-center   ">
          <h1>project image </h1>
          <h1>project image </h1>
          <h1>project image </h1>
          <h1>project image </h1>
        </div>
        {/* project image ends  */}

        {/* language compatibility  */}
        <p className="  text-4xl  text-center mt-20  ">
          Our solution is compatible with all languages supported by the OpenAI
          GPT-4 model.
        </p>
        {/* language compatibility  */}
      </div>
    </div>
  );
};

export default Hero;
