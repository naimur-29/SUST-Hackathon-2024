import React, { useState } from "react";

const ListPair = ({ pair, ind, subMenuOpen, setSubMenuOpen }) => {
  const { title } = pair;

  //   console.log(ind);
  const handleSubMenuOpen = (ind) => {
    setSubMenuOpen((prev) => {
      const newState = new Array(prev.length).fill(false);
      newState[ind] = true;
      return newState;
    });
  };

  return (
    <div className="ListPairContainer bg-red-200 my-3 ">
      <div
        className="ListPairWrapper bg-gray-300 text-xl cursor-pointer relative py-1 "
        onClick={() => handleSubMenuOpen(ind)}
      >
        <h1>
          {ind}.<span className=" px-1 ">{title}</span>{" "}
        </h1>

        {/* sub menu starts  */}

        <div
          className={` ${
            subMenuOpen[ind] ? "" : "hidden"
          } z-10 subMenu bg-sky-400 absolute top-[2rem] left-[7rem]  `}
        >
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
