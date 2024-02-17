import React, { useState } from "react";

import { FaRegSquarePlus } from "react-icons/fa6";
import ListPair from "./ListPair";

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
  const [subMenuOpen, setSubMenuOpen] = useState(
    new Array(pairs.length).fill(false)
  );

  //   console.log(subMenuOpen);

  return (
    <div className="LanguagePairContainer   w-full h-full  ">
      <div className="LanguagePairWrapper  w-full h-full py-8 px-12 ">
        {/* language pair heading starts  */}
        <div className="languagepairHeading  text-2xl flex items-center  gap-x-1 bg-gray-200 p-4   ">
          <h1 className="  cursor-pointer ">Language pairs </h1>
          <FaRegSquarePlus className=" cursor-pointer " />
        </div>
        {/* language pair heading ends  */}

        {/* pair data starts  */}
        <div className="pairData mt-6 px-3    ">
          <ul className="list-decimal list-inside ">
            {pairs &&
              pairs.map((pair, ind) => (
                <ListPair
                  pair={pair}
                  key={ind}
                  ind={ind}
                  subMenuOpen={subMenuOpen}
                  setSubMenuOpen={setSubMenuOpen}
                />
              ))}
          </ul>
        </div>
        {/* pair data ends */}
      </div>
    </div>
  );
};

export default LanguagePair;
