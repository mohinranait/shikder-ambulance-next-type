"use client";
import React from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="w-full">
      <h1 className="text-2xl text-slate-800 font-semibold">Login </h1>
      <div className="flex flex-col gap-4 mt-4">
        <InputElement
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          className="!border-slate-300 border-1"
          value=""
          onChange={() => {}}
        />
        <InputElement
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
          className="!border-slate-300 border-1"
          value=""
          onChange={() => {}}
        />
        <div>
          <Button
            type="submit"
            className="w-full bg-primary text-white rounded-md"
          >
            Login
          </Button>
        </div>
        <p className="text-slate-700 text-center">
          Create a new account{" "}
          <Link href={"/register"} className="text-primary hover:underline ">
            Register
          </Link>{" "}
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
