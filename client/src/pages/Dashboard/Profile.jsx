import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314`;

const Profile = () => {
  const axiosPublicUrl = UseAxiosPublic();
  const { user, loading } = UseAuth();
  const [imageInput, setImageInput] = useState();
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL);

  useEffect(() => {
    setPhotoUrl(user?.photoURL);
  }, [user]);

  return (
    <div className="MyProfileContainer h-screen flex justify-center  ">
      <div className="myProfileWrapper  w-[95%] xsm:w-[90%] sm:w-[85%] md:w-[95%] lg:w-[85%] m-auto  bg-gray-200 rounded shadow-md  ">
        {/*  */}
        {/*  */}
        <div className=" py-6 sm:py-8 lg:py-12   ">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8   ">
            {/* <div className="grid gap-8 md:grid-cols-2 lg:gap-12 bg-orange-300  "> */}
            <div className="flex flex-col  justify-center items-center gap-y-3  ">
              {/* profile pic section starts  */}
              <div className="profileImage    ">
                <div className="h-[6rem] w-[6rem] overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-[8rem]  md:w-[8rem] ">
                  <img
                    src={photoUrl}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              {/* profile pic section ends   */}

              <div className=" profileRight  pt-4 text-center  ">
                {/* user name  */}
                <div className="userName  text-base sm:text-lg lg:text-xl mb-2  ">
                  <p>{user?.displayName}</p>
                </div>
                {/* user name  */}

                {/* user email  */}
                <div className="userEmail text-base sm:text-lg lg:text-xl mb-2  ">
                  <p>{user?.email}</p>
                </div>
                {/* user email  */}

                {/*  */}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
