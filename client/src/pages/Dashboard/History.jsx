import React from "react";
import HistoryCard from "../../Components/Dashboard/HistoryCard";
import { useParams } from "react-router-dom";

const dummyHistory = [
  {
    title: "dummy history 1",
  },
  {
    title: "dummy history 2",
  },
  {
    title: "dummy history 3",
  },
  {
    title: "dummy history 4",
  },
  {
    title: "dummy history 5",
  },
];

const History = () => {
  // const {id} = useParams()
  return (
    <div className="historyContainer ">
      <div className="historyWrapper  py-9 px-6 ">
        {/* history heading starts  */}

        <h1 className=" historyHeading  text-3xl font-medium text-center   ">
          Learning History
        </h1>

        {/* history heading ends */}

        <div className="historyCard  mt-9   ">
          {dummyHistory &&
            dummyHistory?.map((data, ind) => (
              <HistoryCard key={ind} data={data} />
            ))}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default History;
