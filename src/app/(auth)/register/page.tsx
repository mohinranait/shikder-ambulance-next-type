import RegisterForm from "@/components/forms/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className=" w-full md:w-[450px] shadow-2xl rounded-md p-4 border-t-4 border-primary ">
      {/*  */}
      <div className="py-4 px-4 text-center bg-red-50 text-red-600 font-semibold">
        Register can only access email
      </div>
      {/* <RegisterForm /> */}
    </div>
  );
};

export default RegisterPage;
