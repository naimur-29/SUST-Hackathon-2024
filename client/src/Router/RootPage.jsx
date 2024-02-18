import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/shared/NavBar";

const RootPage = () => {
  return (
    <div className="rootPageContainer   ">
      {/* nav container starts  */}
      <div className="navContainer  ">
        <NavBar />
      </div>

      {/* main body  */}
      <div className="bodyContainer pt-[3rem] xsm:pt-[4rem] sm:pt-[5rem] w-[95%] xsm:w-[93%]  sm:w-[90%] m-auto ">
        <Outlet />
      </div>

      {/* footer container  */}
      {/* <div className="footerContainer bg-sky-500  ">
        <h1>footer container </h1>
        <h1>footer container </h1>
        <h1>footer container </h1>
      </div> */}
    </div>
  );
};

export default RootPage;
