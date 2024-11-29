import RegisterForm from "@/components/forms/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className=" w-full md:w-[450px] shadow-2xl rounded-md p-4 border-t-4 border-primary ">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
