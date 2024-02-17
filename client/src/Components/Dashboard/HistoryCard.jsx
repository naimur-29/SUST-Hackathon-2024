/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HistoryCard = ({ history }) => {
  return (
    <div className="historyCardContainer">
      <div className="historyCardWrapper ">
        <div className="historyCard ">
          <h1 className=" bg-gray-200 hover:bg-gray-300  text-gray-950 text-lg py-2 px-6 w-[90%] m-auto rounded-md shadow-md mb-5 cursor-pointer ">
            <Link to={`/dashboard/playground/${history?._id}`}>
              {history?.input}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
