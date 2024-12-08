import React from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";

const ContactUsForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid lg:grid-cols-2 gap-4  ">
        <InputElement
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="bg-transparent text-white placeholder:text-slate-200"
          value=""
        />

        <InputElement
          name="phone"
          type="number"
          className="bg-transparent text-white placeholder:text-slate-200"
          placeholder="Number"
          value=""
        />
      </div>

      <InputElement
        name="address"
        type="text"
        className="bg-transparent text-white placeholder:text-slate-200"
        placeholder="Address"
        value=""
      />

      <div className="bg-slate-200 rounded backdrop-blur-md bg-opacity-20">
        <textarea
          name=""
          id=""
          rows={3}
          placeholder="Write your message..."
          className="focus-visible:border-primary m-0 placeholder:text-slate-200 p-0 focus-visible:outline-offset-0 focus-visible:outline-none bg-transparent text-white w-full focus-visible:outline-primary py-2 rounded px-3 "
        ></textarea>
      </div>
      <div>
        <Button className="bg-primary text-white rounded-md px-8">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
