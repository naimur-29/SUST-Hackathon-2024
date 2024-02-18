import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const LearningPlayground = () => {
  // states:
  const [language, setLanguage] = useState("English");
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [explanation, setExplanation] = useState(null);
  const [currentLine, setCurrentLine] = useState(null);

  // hooks:
  const { _id } = useParams();
  const { user } = useAuth();

  // api queries:
  const { data: languagePair, isLoading: languagePairIsLoading } = useQuery(
    ["fetchLanguagePair", user?.uid],
    async () => {
      const res = await axios.get(
        `http://localhost:8000/api/pair/${user?.uid}/${_id}`
      );
      return res.data.data;
    }
  );

  const convertCodeMutation = useMutation((data) =>
    axios.post(`http://localhost:8000/api/pair/${user?.uid}/${_id}`, data)
  );

  const explainCodeMutation = useMutation((data) =>
    axios.post(
      `http://localhost:8000/api/pair/${user?.uid}/${_id}/explain`,
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
    setExplanation(null);
  };

  const handleGenerate = () => {
    if (!userInput) return;
    convertCodeMutation.mutate({
      input: userInput,
    });
  };

  // for getting explanation  , after  code click
  const handleCodeLineExplanation = (data, index) => {
    setExplanation("Loading...");
    setCurrentLine(index);
    explainCodeMutation.mutate({
      input: data.replace("\n", ""),
      language: language.trim().toLowerCase(),
    });
  };

  // useEffects:
  useEffect(() => {
    if (convertCodeMutation.isSuccess) {
      setData(convertCodeMutation.data.data.data);
    }
    if (explainCodeMutation.isSuccess) {
      window.scrollTo(0, 999999);
      setExplanation(explainCodeMutation.data.data.data);
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
            <p className="text-xl font-medium ">
              {languagePairIsLoading
                ? "Loading..."
                : languagePair?.name?.split(" To ")[0]}{" "}
              (in)
            </p>
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
            <div className="outputLanguageInput">
              <div className="flex justify-between w-full title-container">
                <p className="text-xl font-medium ">
                  {languagePairIsLoading
                    ? "Loading..."
                    : languagePair?.name?.split(" To ")[1]}{" "}
                  (out)
                </p>

                <div className="language-container">
                  <label htmlFor="language" className="font-semibold">
                    Language:{" "}
                  </label>
                  <input
                    value={language}
                    onChange={(e) => {
                      e.preventDefault();
                      setLanguage(e.target.value);
                    }}
                    type="text"
                    className="border-[2px] border-black px-2"
                  />
                </div>
              </div>
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

            {/* BOTTOM SECTION STARTS  */}
            {/* if there is no response data , then bottom section will hidden  */}
            {data ? (
              <div className="bottomSection ">
                {/* explain container starts  */}

                {!explanation ? (
                  <></>
                ) : (
                  <div className="explainSection  mt-[2.5rem]  ">
                    {/* explanation title starts  */}
                    <h1 className="mb-3 text-xl font-semibold ">
                      Explanation:
                    </h1>

                    {/* explanation title ends */}

                    <p className="p-3 text-lg bg-gray-200 rounded ">
                      {explanation}
                    </p>
                  </div>
                )}
                {/* explain container ends  */}

                {/* more example button starts  */}
                {/* <div className="moreExample mt-[1rem]  text-end ">
                  <button className="px-4 py-2 bg-green-600 rounded text-gray-50 hover:bg-green-700 hover:scale-105 active:scale-100 hover:shadow-md">
                    More Example{" "}
                  </button>
                </div> */}
                {/* more example button ends */}
              </div>
            ) : (
              " "
            )}

            {/* BOTTOM SECTION ends  */}
          </div>
        )}
        {/* output container ends */}
      </div>
    </div>
  );
};

export default LearningPlayground;
