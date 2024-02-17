import React, { useState } from "react";

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListPair = ({ pair, ind, subMenuOpen, setSubMenuOpen }) => {
  const { title } = pair;

  //   show  sub menu after a pair is clicked
  const handleSubMenuOpen = (ind) => {
    setSubMenuOpen((prev) => {
      const newState = new Array(prev.length).fill(false);
      newState[ind] = true;
      return newState;
    });
  };

  const handleSubMenuClose = () => {
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
          <div className="menuItem flex flex-col gap-y-1">
            <Link to={"/dashboard/playground"}>Learn </Link>
            <Link to={"/dashboard/learningHistory/:id"}>View history </Link>

            <Link>Delete pair </Link>

            {/* close button starts  */}
            <div
              className="closeBtn   flex justify-center  bg-gray-300  "
              onClick={() => handleSubMenuClose()}
            >
              <IoClose className="   text-red-500 font-bold text-2xl " />
            </div>
            {/* close button ends */}
          </div>
        </div>

        {/* sub menu ends  */}
      </div>
    </div>
  );
};

export default ListPair;
