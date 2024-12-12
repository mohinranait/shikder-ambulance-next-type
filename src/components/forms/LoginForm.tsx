"use client";
import React, { FormEvent, useContext, useState } from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import { useAuth } from "@/providers/AuthProvider";

const LoginForm = () => {
  const { user, setUser } = useAuth();

  const axios = useAxios();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  // If user is already login
  if (user) {
    router.push("/");
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data } = await axios.post("/user/login", form);

      if (data.success) {
        setIsLoading(false);
        setUser(data?.payload);
        toast.success("Login successfull");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="text-2xl text-slate-800 font-semibold">Login </h1>
      <div className="flex flex-col gap-4 mt-4">
        <InputElement
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          className="!border-slate-300 border-1"
          value={form?.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e }))}
        />
        <InputElement
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
          className="!border-slate-300 border-1"
          value={form?.password}
          onChange={(e) => setForm((prev) => ({ ...prev, password: e }))}
        />
        <div>
          <Button
            type="submit"
            className="w-full bg-primary text-white rounded-md"
            isLoading={isLoading}
            isDisabled={isLoading}
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
