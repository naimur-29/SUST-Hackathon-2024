import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import UseAuth from "../../Hooks/UseAuth";

import { FaRegSquarePlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import ListPair from "./ListPair";

const LanguagePair = () => {
  // hooks:
  const { user } = UseAuth();

  const [pairModal, setPairModal] = useState(false);
  // for taking new pair
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  // queries:
  const languagePairsQuery = useQuery("fetchLanguagePairs", async () => {
    const res = await axios.get(`http://localhost:8000/api/pair/${user?.uid}`);
    return res.data.data;
  });

  // states:
  const [subMenuOpen, setSubMenuOpen] = useState(
    new Array(languagePairsQuery?.data?.length).fill(false)
  );

  return (
    <div className="w-full h-full LanguagePairContainer ">
      <div className="w-full h-full px-12 py-8 LanguagePairWrapper ">
        {/* language pair heading starts  */}
        <div className="relative flex items-center p-4 text-2xl bg-gray-200  languagepairHeading gap-x-1">
          <h1 className="cursor-pointer ">Language pairs </h1>
          <FaRegSquarePlus
            className="cursor-pointer "
            onClick={() => addIconClick()}
          />

          {/* select language modal starts  */}
          {/* select language modal starts  */}

          <div
            className={` z-[10] top-[3.5rem] left-[8.5rem] ${
              pairModal ? "absolute" : "hidden"
            }    selectModal  bg-sky-300 p-2 w-[32rem] rounded  `}
          >
            {/* cross button starts  */}
            <div className="flex justify-end mb-2 crossBtn ">
              <RxCross1
                className="text-3xl font-bold text-red-600 cursor-pointer "
                onClick={() => addIconClick()}
              />
            </div>
            {/* cross button ends  */}

            {/* input section starts  */}

            <div className="flex items-center self-center justify-between gap-2 inputSection ">
              {/* left input starts  */}
              <div className="leftInput  w-[50%] ">
                <label
                  htmlFor="fromLanguage"
                  className="block mb-1 text-base font-medium text-gray-900 "
                >
                  From :
                </label>
                <select
                  id="fromLanguage"
                  onChange={(e) => setFrom(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none block w-full p-2.5 "
                >
                  <option value="">Select language</option>
                  <option value="c">C</option>
                  <option value="c++">C++</option>
                  <option value="java">java</option>
                  <option value="javaScript">javaScript</option>
                </select>
              </div>
              {/* left input ends  */}

              {/* right input starts  */}

              <div className="rightInput  w-[50%]">
                <label
                  htmlFor="toLanguage"
                  className="block mb-1 text-base font-medium text-gray-900 "
                >
                  To :
                </label>
                <select
                  id="toLanguage"
                  onChange={(e) => setTo(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded outline-none block w-full p-2.5 "
                >
                  <option value="">Select language</option>
                  <option value="c">C</option>
                  <option value="c++">C++</option>
                  <option value="java">java</option>
                  <option value="javaScript">javaScript</option>
                </select>
              </div>
              {/* right input ends */}
            </div>

            {/* input section ends  */}

            {/* create button starts  */}
            <div className="mt-3 text-center createBtn ">
              <button
                className="px-4 py-2 text-base bg-green-600 rounded  hover:bg-green-700 text-gray-50 active:scale-95"
                onClick={() => addPair()}
              >
                Create
              </button>
            </div>
            {/* create button ends  */}
          </div>

          {/* select language modal ends  */}
          {/* select language modal ends  */}
        </div>
        {/* language pair heading ends  */}

        {/* pair data starts  */}
        <div className="px-3 mt-6 pairData ">
          <ul className="list-decimal list-inside cursor-pointer ">
            {!languagePairsQuery?.data?.length ? (
              <h3>No pairs created!</h3>
            ) : (
              languagePairsQuery?.data?.map((pair, ind) => (
                <ListPair
                  pair={pair}
                  key={ind}
                  ind={ind}
                  subMenuOpen={subMenuOpen}
                  setSubMenuOpen={setSubMenuOpen}
                />
              ))
            )}
          </ul>
        </div>
        {/* pair data ends */}
      </div>
    </div>
  );
};

export default LanguagePair;
