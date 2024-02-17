/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListPair = ({ pair, ind, subMenuOpen, setSubMenuOpen }) => {
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
    <div className="my-3 bg-red-200 ListPairContainer ">
      <div
        className="relative p-1 px-3 text-xl bg-gray-300 cursor-pointer ListPairWrapper "
        // onClick={() => handleSubMenuOpen(ind)}
      >
        <h1 onClick={() => handleSubMenuOpen(ind)}>
          {ind + 1}.<span className="px-1 ">{pair.name}</span>{" "}
        </h1>

        {/* sub menu starts  */}

        <div
          className={` ${
            subMenuOpen[ind] ? "" : "hidden"
          } z-10 subMenu bg-gray-600 text-gray-50 absolute top-[2.2rem] left-[7rem] p-2  `}
        >
          <div className="flex flex-col menuItem gap-y-1">
            <Link to={"/dashboard/playground"}>Learn </Link>
            <Link to={`/dashboard/learningHistory/${pair.lid}`}>
              View history{" "}
            </Link>

            <Link>Delete pair </Link>

            {/* close button starts  */}
            <div
              className="flex justify-center bg-gray-300 closeBtn "
              onClick={() => handleSubMenuClose()}
            >
              <IoClose className="text-2xl font-bold text-red-500 " />
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
