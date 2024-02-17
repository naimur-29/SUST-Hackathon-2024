import React, { useState } from "react";

import { IoClose } from "react-icons/io5";

const ListPair = ({ pair, ind, subMenuOpen, setSubMenuOpen }) => {
  const { title } = pair;

  //   console.log(ind);
  //   show  sub menu after a pair is clicked
  const handleSubMenuOpen = (ind) => {
    setSubMenuOpen((prev) => {
      const newState = new Array(prev.length).fill(false);
      newState[ind] = true;
      return newState;
    });
  };

  const handleSubMenuClose = (ind) => {
    console.log(ind);
    setSubMenuOpen((prev) => {
      const newState = new Array(prev.length).fill(false);
      return newState;
    });
  };

  return (
    <div className="ListPairContainer bg-red-200 my-3 ">
      <div
        className="ListPairWrapper bg-gray-300 text-xl cursor-pointer relative py-1 "
        // onClick={() => handleSubMenuOpen(ind)}
      >
        <h1 onClick={() => handleSubMenuOpen(ind)}>
          {ind + 1}.<span className=" px-1 ">{title}</span>{" "}
        </h1>

        {/* sub menu starts  */}

        <div
          className={` ${
            subMenuOpen[ind] ? "" : "hidden"
          } z-10 subMenu bg-gray-600 text-gray-50 absolute top-[2.2rem] left-[7rem] p-2  `}
        >
          {/* close button starts  */}
          <div className="closeBtn mb-1  flex justify-end  ">
            <IoClose
              className="   text-red-500 font-bold text-2xl "
              onClick={() => handleSubMenuClose(ind)}
            />
          </div>
          {/* close button ends */}

          <h1>Sub menu 1 </h1>
          <h1>Sub menu 2 </h1>
          <h1>Sub menu 3 </h1>
        </div>

        {/* sub menu ends  */}
      </div>
    </div>
  );
};

export default ListPair;

//    <li
//                   className=" relative  text-2xl my-2.5 cursor-pointer "
//                   onClick={() => handleLiClick(ind)}
//                 >
//                   {pair?.title}

{
  /* sub menu starts  */
}
{
  /* <div
                    className={` ${
                      openSubMenu ? "" : "hidden"
                    } z-10 subMenu bg-sky-400 absolute top-[2rem] left-[7rem]  `}
                  >
                    <h1>Sub menu 1 </h1>
                    <h1>Sub menu 2 </h1>
                    <h1>Sub menu 3 </h1>
                  </div> */
}
{
  /* sub menu starts  */
}
{
  /* </li> */
}
