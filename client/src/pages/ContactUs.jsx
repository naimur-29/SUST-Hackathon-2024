import React from "react";
import ContactUsForm from "../Components/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div className="contactUsWrapper mt-10  ">
        {/* contact us heading  */}
        <h1 className=" text-3xl text-center font-semibold mb-6   ">
          Contact Us
        </h1>

        {/* contact us title  */}
        <p className=" text-xl text-center  w-[80%] m-auto   ">
          We would love to hear from you! Reach out to us on
          contact@CodeCompanion.ai or use the form below to share any feedback
          or if you have any questions.
        </p>

        {/* contact us form starts  */}
        <div className="contatcUsForm  mt-12  ">
          <ContactUsForm />
        </div>
        {/* contact us form ends  */}
      </div>
    </div>
  );
};

export default ContactUs;
