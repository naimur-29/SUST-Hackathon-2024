const dummyData = [
  "public class Main {",
  "    public static void main(String[] args) {",
  '        System.out.println("hello worlds");',
  "    }",
  "}",
];

const LearningPlayground = () => {
  const handleCodeLine = (data) => {
    console.log(data);
  };

  return (
    <div className="learningGroudContainer">
      <div className="learningGroudWrapper">
        {/* input container starts  */}
        <div className="inputContainer  ">
          {/* input container top input  */}
          <div className="userSelectInputSection   ">
            <p className="  text-xl font-medium ">Js (input)</p>
          </div>
          {/* input container top input  */}

          {/* user code input container starts   */}
          <div className="userCode mt-2  ">
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your code"
            ></textarea>
          </div>
          {/* user code input container ends  */}
        </div>
        {/* input container ends  */}

        {/* output container starts  */}
        <div className="outputContainer  mt-[2.5rem] ">
          {/* user output language select input starts  */}
          <div className="outputLanguageinput">
            <p className="  text-xl font-medium ">Java (Output)</p>
          </div>
          {/* user output language select input ends  */}

          {/* output response container starts  */}
          <div className="outputContainer mt-[1rem] flex flex-col gap-y-0   p-3 bg-gray-200  ">
            {dummyData &&
              dummyData?.map((code, ind) => (
                <p
                  className="codeLine   p-1  cursor-pointer rounded  "
                  onClick={() => handleCodeLine(code)}
                >
                  <pre>{code}</pre>
                </p>
              ))}
          </div>
          {/* output response container starts  */}

          {/* convert button starts  */}
          <div className="convertBtn mt-[1.5rem] ">
            <button className=" py-2 px-4 bg-green-600 text-gray-50 font-medium rounded hover:bg-green-700 hover:shadow-lg hover:scale-105 active:scale-100   ">
              Generate
            </button>
          </div>
          {/* convert button ends */}

          {/* explain container starts  */}
          <div className="explainSection  mt-[2.5rem]  ">
            {/* explaination title starts  */}
            <h1 className="  mb-3  font-semibold text-xl ">
              Explaination (out) :
            </h1>

            {/* explaination title ends */}

            <p className=" bg-gray-200 text-lg   p-3 rounded   ">
              my explaination my explaination my explaination my explaination my
              explaination
            </p>
          </div>
          {/* explain container ends  */}

          {/* more example button starts  */}
          <div className="moreExample mt-[1rem]  text-end ">
            <button className=" py-2 px-4 bg-green-600 text-gray-50 hover:bg-green-700 hover:scale-105 active:scale-100 hover:shadow-md rounded     ">
              More Example{" "}
            </button>
          </div>
          {/* more example button ends */}
        </div>
        {/* output container ends */}
      </div>
    </div>
  );
};

export default LearningPlayground;
