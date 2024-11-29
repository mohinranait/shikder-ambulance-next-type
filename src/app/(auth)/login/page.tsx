import LoginForm from "@/components/forms/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className=" w-full md:w-[450px] shadow-2xl rounded-md p-4 border-t-4 border-primary ">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
