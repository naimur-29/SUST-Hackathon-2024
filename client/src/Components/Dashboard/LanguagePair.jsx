import React from "react";

import { FaRegSquarePlus } from "react-icons/fa6";

const pairs = [
  {
    title: "Python to Java",
  },
  {
    title: "Python to JavaScript",
  },
  {
    title: "Python to C++",
  },
];

const LanguagePair = () => {
  return (
    <div className="LanguagePairContainer   w-full h-full  ">
      <div className="LanguagePairWrapper  w-full h-full py-8 px-16 ">
        {/* language pair heading starts  */}
        <div className="languagepairHeading  text-2xl flex items-center justify-center self-center gap-x-1 bg-gray-200 p-4 w-[30%]  ">
          <h1 className="  cursor-pointer ">Language pairs </h1>
          <FaRegSquarePlus className=" cursor-pointer " />
        </div>
        {/* language pair heading ends  */}

        {/* pair data starts  */}
        <div className="pairData mt-8     ">
          <ul className="list-decimal list-inside ">
            {pairs &&
              pairs.map((pair, ind) => (
                <li className="  text-xl py-2 cursor-pointer ">
                  {" "}
                  {pair?.title}{" "}
                </li>
              ))}
          </ul>
        </div>
        {/* pair data ends */}
      </div>
    </div>
  );
};

export default LanguagePair;
