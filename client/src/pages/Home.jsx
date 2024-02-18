import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseStateHook from "../Hooks/UseStateHook";
import UseAuth from "../Hooks/UseAuth";
import Hero from "../Components/Hero";
import WhyUse from "../Components/WhyUse";

export default function Home() {
  const { state } = UseStateHook();
  const { loading, test, user } = UseAuth();

  // console.log(user);

  return (
    <div className="homePageContainer     ">
      {/* hero section starts  */}
      <div className="heroSection  ">
        <Hero />
      </div>
      {/* hero section ends  */}

      {/* why use us section starts  */}
      <div className="whyUSection">
        <WhyUse />
      </div>
      {/* why use us section ends  */}

      <ToastContainer />

      {/*  */}
    </div>
  );
}
