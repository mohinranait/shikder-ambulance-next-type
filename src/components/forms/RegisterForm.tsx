import React from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className="w-full">
      <h1 className="text-2xl text-slate-800 font-semibold">Register </h1>
      <div className="flex flex-col gap-4 mt-4">
        <InputElement
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter name"
          className="!border-slate-300 border-1"
        />
        <InputElement
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          className="!border-slate-300 border-1"
        />
        <InputElement
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
          className="!border-slate-300 border-1"
        />
        <InputElement
          label="Re-Password"
          name="password"
          type="password"
          placeholder="Enter Re-password"
          className="!border-slate-300 border-1"
        />
        <div>
          <Button
            type="submit"
            className="w-full bg-primary text-white rounded-md"
          >
            Register
          </Button>
        </div>
        <p className="text-slate-700 text-center">
          Already have an account{" "}
          <Link href={"/login"} className="text-primary hover:underline ">
            Register
          </Link>{" "}
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
