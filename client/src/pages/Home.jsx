import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseStateHook from "../Hooks/UseStateHook";
import UseAuth from "../Hooks/UseAuth";

export default function Home() {
  const { state } = UseStateHook();
  const { loading, test, user } = UseAuth();

  // console.log(test);

  // console.log(state);
  // console.log(user?.photoURL);
  return (
    <div className="homePageContainer     ">
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>Monir </h1>
      <h1>Monir </h1>
      <h1>Monir </h1>

      <ToastContainer />

      {/*  */}
    </div>
  );
}
