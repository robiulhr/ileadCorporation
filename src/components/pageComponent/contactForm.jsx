import React from "react";
import Inputfeild from "../globalComponent/InputtextAndBtn/inputfeild";

const ContactForm = () => {
  return (
    <div className="flex-row-center m-10 mb-40">
      <form className="contact-form">
        <div className="flex-row-around w-full">
          <div className="w-1/2 mr-3">
            <Inputfeild classes="w-full" label="Name" />
          </div>
          <div className="w-1/2 ml-3">
            <Inputfeild classes="w-full" label="Email" />
          </div>
        </div>
        <div className="w-full my-10">
          <textarea name="message" className="" form="usrform">
            Enter text here...
          </textarea>
        </div>
        <div className="flex-row-center">
          <input
            type="submit"
            id="submityourmassege"
            className="btn btn-primary-blue-transparent px-40 py-5 mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
