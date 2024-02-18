import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ekuqve",
        "template_j5l8hfu",
        form.current,
        "GRdTJiE8CHcFoD9LB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactUsFormContainer  ">
      {/* <div className="ContactUsFormWrapper bg-gray-300 flex flex-col justify-center items-center self-center  w-[90%] xsm:w-[80%]  sm:w-[66%] md:w-[55%] lg:w-[40%] m-auto  py-5 px-8 rounded-md shadow-lg  "> */}
      <div className=" ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" ContactUsFormWrapper bg-gray-300 flex flex-col justify-center items-center self-center  w-[90%] xsm:w-[80%]  sm:w-[66%] md:w-[55%] lg:w-[40%] m-auto  py-5 px-8 rounded-md shadow-lg  "
        >
          {/* email input  */}
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none mb-4 "
            placeholder="Your email"
            required
          />

          {/* email input ends   */}

          {/* textarea starts  */}
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none "
            placeholder="Your message"
          ></textarea>

          {/* textarea starts  */}

          {/* submit button starts  */}
          <div className="submitBtn mt-4 ">
            <button className="   py-1.5 xsm:py-2 px-3.5 xsm:px-4 text-sm xsm:text-base bg-green-600 hover:bg-green-700 active:scale-95 hover:shadow-2xl text-gray-50 font-medium rounded-md  ">
              Submit
            </button>
          </div>
          {/* submit button sends */}
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
