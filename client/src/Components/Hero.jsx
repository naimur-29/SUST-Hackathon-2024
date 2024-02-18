import React from "react";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroWrapper pt-6  ">
        {/* hero heading starts  */}
        <h1 className="  text-2xl xsm:text-3xl sm:text-4xl xmd:text-5xl font-medium text-center w-[95%] xsm:w-[90%] sm:w-[85%] xmd:w-[70%] lg:w-[60%] m-auto  ">
          Transform code with just one click.
        </h1>
        {/* hero heading ends  */}

        {/* hero title starts  */}
        <p className=" mt-2 xsm:mt-3 md:mt-5 xmd:mt-7 lg:mt-9 text-sm xsm:text-base md:text-lg xmd:text-xl w-[85%] md:w-[78%] xmd:w-[66%] lg:w-[50%] text-center m-auto  ">
          CodeCompanion made super simple to save you hours of time from
          learning a completely new language.
        </p>
        {/* hero title starts  */}

        {/* project image starts  */}
        <div className="projectImage bg-green-300 mt-3  xsm:mt-5 sm:mt-7 md:mt-9 xmd:mt-12 flex flex-col justify-center items-center   ">
          <h1>project image </h1>
          <h1>project image </h1>
          <h1>project image </h1>
          <h1>project image </h1>
        </div>
        {/* project image ends  */}

        {/* language compatibility  */}
        <p className=" text-xl xsm:text-2xl sm:text-3xl lg:text-4xl  text-center mt-7 xsm:mt-8 sm:mt-10 md:mt-12 xmd:mt-16 lg:mt-20    ">
          Our solution is compatible with all languages supported by the OpenAI
          GPT-4 model.
        </p>
        {/* language compatibility  */}
      </div>
    </div>
  );
};

export default Hero;
