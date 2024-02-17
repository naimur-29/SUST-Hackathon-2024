import React from "react";
import Card from "./Card";

import { GoStopwatch } from "react-icons/go";
import { LuMousePointerClick } from "react-icons/lu";
import { TbSettingsUp } from "react-icons/tb";

const whyUseData = [
  {
    icon: <GoStopwatch />,
    heading: "Saves Time",
    description:
      "Automated code conversion means you don't have to spend hours manually rewriting code in a different language.",
  },
  {
    icon: <LuMousePointerClick />,
    heading: "Easy to Use",
    description:
      "With a simple interface and straightforward process, even those new to programming can easily use our tool without any hassle.",
  },
  {
    icon: <TbSettingsUp />,
    heading: "No Setup Required",
    description:
      "No need to download or install any software. Simply paste your code and click a button to convert it to your desired language.",
  },
];

const WhyUse = () => {
  return (
    <div className="whyChooseUsContainer   mt-7 xsm:mt-8 sm:mt-10 md:mt-12 xmd:mt-16 lg:mt-20 ">
      <div className="whyChooseWrapper">
        {/* Header section  */}
        <h1 className="  text-2xl md:text-3xl text-center font-bold  ">
          Why Use CodeCompanion
        </h1>

        {/* header section ends  */}

        {/* card section starts  */}
        <div className="cardSection  mt-12 grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-8 ">
          {whyUseData &&
            whyUseData.map((data, ind) => <Card key={ind} data={data} />)}
        </div>
        {/* card section ends  */}
      </div>
    </div>
  );
};

export default WhyUse;
