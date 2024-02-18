/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";
import UseAuth from "../../Hooks/UseAuth";

const ListPair = ({ pair, ind, subMenuOpen, setSubMenuOpen }) => {
  // hooks:
  const { user } = UseAuth();

  // queries:
  const deletePairMutation = useMutation(async (id) => {
    const res = await axios.delete(
      `http://localhost:8000/api/pair/${user?.uid}/${id}`
    );
    return res?.data;
  });

  // event handle functions:
  //   show  sub menu after a pair is clicked
  const handleSubMenuOpen = (ind) => {
    setSubMenuOpen((prev) => {
      const newState = new Array(prev.length).fill(false);
      newState[ind] = true;
      return newState;
    });
  };

  // close the menu with close button
  const handleSubMenuClose = () => {
    setSubMenuOpen((prev) => {
      const newState = new Array(prev.length).fill(false);
      return newState;
    });
  };

  // delete a languagePair
  const handleDeletePair = () => {
    deletePairMutation.mutate(pair._id);
    window.location.reload();
  };

  return (
    <div className="my-3 bg-red-200 ListPairContainer ">
      <div
        className="relative p-1 px-3 text-xl bg-gray-300 cursor-pointer ListPairWrapper"
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
            <Link to={`/dashboard/playground/${pair._id}`}>
              <button className="font-bold px-2 py-1 w-full bg-[#fff3]">
                Learn
              </button>
            </Link>
            <Link to={`/dashboard/learningHistory/${pair._id}`}>
              <button className="font-bold px-2 py-1 w-full bg-[#fff3]">
                View history
              </button>
            </Link>

            <button
              className="font-bold px-2 py-1 w-full bg-[#fff3]"
              onClick={handleDeletePair}
            >
              {deletePairMutation.isLoading ? "Loading..." : "Delete Pair"}
            </button>

            {/* close button starts  */}
            <div
              className="flex justify-center bg-gray-300 closeBtn "
              onClick={handleSubMenuClose}
            >
              <IoClose className="text-3xl font-bold text-red-500" />
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
