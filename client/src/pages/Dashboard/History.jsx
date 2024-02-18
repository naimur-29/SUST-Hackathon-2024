import HistoryCard from "../../Components/Dashboard/HistoryCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "../../Hooks/UseAuth";

const History = () => {
  // hooks:
  const { _id } = useParams();
  const { user } = useAuth();

  // queries:
  const historyQuery = useQuery(
    ["fetchConversionHistory", user?.uid],
    async () => {
      const res = await axios.get(
        `http://localhost:8000/api/history/${user?.uid}/${_id}`
      );
      return res.data.data;
    }
  );

  return (
    <div className="historyContainer ">
      <div className="px-6 historyWrapper py-9 ">
        {/* history heading starts  */}

        <h1 className="text-3xl font-medium text-center historyHeading">
          Learning History
        </h1>

        {/* history heading ends */}
        <div className="historyCard mt-9 ">
          {historyQuery.isLoading ? (
            <h3>Loading...</h3>
          ) : !historyQuery?.data?.length ? (
            <h3>No histories yet!</h3>
          ) : (
            historyQuery?.data?.map((history, ind) => (
              <HistoryCard key={ind} history={history} />
            ))
          )}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default History;
