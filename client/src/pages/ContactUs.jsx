import React from "react";
import ContactUsForm from "../Components/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div className="contactUsWrapper  mt-3 xsm:mt-4 sm:mt-6  xmd:mt-8 lg:mt-10  ">
        {/* contact us heading  */}
        <h1 className=" text-2xl xsm:text-3xl text-center font-semibold mb-4 xsm:mb-5 sm:mb-6   ">
          Contact Us
        </h1>

        {/* contact us title  */}
        <p className="  text-sm xsm:text-base sm:text-lg md:text-xl text-center  w-[90%] lg:w-[80%] m-auto   ">
          We would love to hear from you! Reach out to us on
          contact@CodeCompanion.ai or use the form below to share any feedback
          or if you have any questions.
        </p>

        {/* contact us form starts  */}
        <div className="contatcUsForm   mt-5 sm:mt-6 md:mt-8 xmd:mt-10 lg:mt-12  ">
          <ContactUsForm />
        </div>
        {/* contact us form ends  */}
      </div>
    </div>
  );
};

export default ContactUs;
