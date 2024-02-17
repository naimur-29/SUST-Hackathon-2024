import React from "react";
import Card from "./Card";

const WhyUse = () => {
  return (
    <div className="whyChooseUsContainer mt-20 ">
      <div className="whyChooseWrapper">
        {/* Header section  */}
        <h1 className=" text-3xl text-center font-bold  ">
          Why Use CodeCompanion
        </h1>

        {/* header section ends  */}

        {/* card section starts  */}
        <div className="cardSection  mt-12 grid grid-cols-3 gap-x-6 gap-y-8 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* card section ends  */}
      </div>
    </div>
  );
};

export default WhyUse;
