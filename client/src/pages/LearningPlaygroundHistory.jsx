import { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

const LearningPlaygroundHistory = () => {
  // states:
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [currentLine, setCurrentLine] = useState(null);

  // hooks:
  const { _id } = useParams();

  // api queries:
  const convertCodeMutation = useMutation((data) =>
    axios.post(
      "http://localhost:8000/api/pair/oiwrksdfal;skjf304598asfda/PythonToJava",
      data
    )
  );

  const explainCodeMutation = useMutation((data) =>
    axios.post(
      "http://localhost:8000/api/pair/oiwrksdfal;skjf304598asfda/PythonToJava/explain",
      data
    )
  );

  // event handle functions:
  // function for generate output
  const handleUserInputChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
    setData(null);
    setCurrentLine(null);
  };

  const handleGenerate = () => {
    if (!userInput) return;
    convertCodeMutation.mutate({
      input: userInput,
    });
  };

  // for getting explanation  , after  code click
  const handleCodeLineExplanation = (data, index) => {
    setCurrentLine(index);
    explainCodeMutation.mutate({
      input: data.replace("\n", ""),
    });
  };

  // useEffects:
  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:8000/api/history/${_id}`)
        .then((res) => {
          setUserInput(res?.data?.data?.input);
          setData(res?.data?.data?.output);
        })
        .catch((err) => console.error(err));
    }

    if (convertCodeMutation.isSuccess) {
      setData(convertCodeMutation.data.data.data);
    }
    if (explainCodeMutation.isSuccess) {
      window.scrollTo(0, 999999);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, convertCodeMutation.isLoading, explainCodeMutation.isLoading]);

  return (
    <div className="learningGroudContainer ">
      <div className="py-4 learningGroudWrapper px-7 ">
        {/* input container starts  */}
        <div className="inputContainer ">
          {/* input container top input  */}
          <div className="userSelectInputSection ">
            <p className="text-xl font-medium ">Python (in)</p>
          </div>
          {/* input container top input  */}

          {/* user code input container starts   */}
          <div className="mt-4 userCode ">
            <textarea
              onChange={handleUserInputChange}
              value={userInput}
              id="message"
              rows="7"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300     "
              placeholder="Enter your code"
            ></textarea>
          </div>
          {/* user code input container ends  */}
        </div>
        {/* input container ends  */}

        {/* convert button starts  */}
        <div className="convertBtn mt-[1.5rem] ">
          <button
            className="cursor-pointer px-4 py-2 font-medium bg-green-600 rounded text-gray-50 hover:bg-green-700 hover:shadow-lg hover:scale-105 active:scale-100 disabled:opacity-[0.3] disabled:hover:scale-100 disabled:hover:bg-green-600 disabled:hover:shadow-none"
            onClick={() => handleGenerate()}
            disabled={data}
          >
            {convertCodeMutation.isLoading ? "Loading..." : "Generate"}
          </button>
        </div>
        {/* convert button ends */}

        {/* output container starts  */}
        {!data ? (
          <></>
        ) : (
          <div className="outputContainer  mt-[2.5rem] ">
            {/* user output language select input starts  */}
            <div className="outputLanguageinput">
              <p className="text-xl font-medium ">Java (out)</p>
            </div>
            {/* user output language select input ends  */}
            {/* output response container starts  */}
            <div
              className={`cursor-pointer outputContainer mt-[1rem] flex flex-col gap-y-0 p-3 bg-gray-200 min-h-[100px]`}
            >
              {data &&
                data?.map((code, ind) => (
                  <pre key={ind}>
                    <p
                      className={`p-1 rounded codeLine hover:bg-[#fff9] ${
                        currentLine !== null && currentLine === ind
                          ? "bg-[#fff9]"
                          : ""
                      }`}
                      onClick={() => handleCodeLineExplanation(code, ind)}
                    >
                      {code}
                    </p>
                  </pre>
                ))}
            </div>
            {/* BOTTOM SECTION ends  */}
          </div>
        )}
        {/* output container ends */}
      </div>
    </div>
  );
};

export default LearningPlaygroundHistory;
