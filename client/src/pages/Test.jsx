import React from "react";

const Test = () => {
  return (
    <div className="learningGroudContainer">
      <div className="learningGroudWrapper">
        {/* input container starts  */}
        <div className="inputContainer">
          {/* input container top input  */}
          <div className="userSelectInputSection">
            <label
              htmlFor="category"
              className="block mb-2  font-medium text-gray-900 "
            >
              User language
            </label>
            <select
              id="user_language"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            >
              <option value="">Select language</option>
              <option value="">JavaScript</option>
              <option value="">Java</option>
            </select>
          </div>
          {/* input container top input  */}

          {/* user code input container starts   */}
          <div className="userCode mt-4 ">
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
        <div className="outputContainer  mt-[3rem] ">
          {/* user output language select input starts  */}
          <div className="outputLanguageinput">
            <label
              htmlFor="category"
              className="block mb-2  font-medium text-gray-900 "
            >
              Output
            </label>
            <select
              id="user_language"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            >
              <option value="">Select language</option>
              <option value="">JavaScript</option>
              <option value="">Java</option>
            </select>
          </div>
          {/* user output language select input ends  */}

          {/* convert button starts  */}
          <div className="convertBtn mt-[1rem] ">
            <button className=" py-2 px-4 bg-green-600 text-gray-50 font-medium rounded hover:bg-green-700 hover:shadow-lg hover:scale-105 active:scale-100   ">
              Convert
            </button>
          </div>
          {/* convert button ends */}
        </div>
        {/* output container ends */}
      </div>
    </div>
  );
};

export default Test;
