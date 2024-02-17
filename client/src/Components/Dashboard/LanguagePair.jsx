import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

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
  // states:
  const [subMenuOpen, setSubMenuOpen] = useState(
    new Array(pairs.length).fill(false)
  );

  // queries:
  const languagePairsQuery = useQuery("fetchLanguagePairs", async () => {
    const res = await axios.get(
      "http://localhost:8000/api/pair/lasdfkajslf04389lakjsf"
    );
    return res.data.data;
  });

  return (
    <div className="w-full h-full LanguagePairContainer ">
      <div className="w-full h-full px-12 py-8 LanguagePairWrapper ">
        {/* language pair heading starts  */}
        <div className="flex items-center p-4 text-2xl bg-gray-200 languagepairHeading gap-x-1 ">
          <h1 className="cursor-pointer ">Language pairs </h1>
          <FaRegSquarePlus className="cursor-pointer " />
        </div>
        {/* language pair heading ends  */}

        {/* pair data starts  */}
        <div className="px-3 mt-6 pairData ">
          <ul className="list-decimal list-inside cursor-pointer ">
            {languagePairsQuery?.data?.length &&
              languagePairsQuery?.data?.map((pair, ind) => (
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
