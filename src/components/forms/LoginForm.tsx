"use client";
import React, { FormEvent, useState } from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BASE_URL } from "@/config/accessEnv";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    try {
      // setIsLoading(true);
      const res = await signIn("credentials", { ...form, redirect: false });
      console.log(res);
      if (res?.ok) {
        toast.success("Login successfull");
        router.push("/");
      }

      // const res = await fetch(`${BASE_URL}/api/user/login`, {
      //   method: "POST",
      //   headers: {
      //     "content-type": "Application/json",
      //   },
      //   body: JSON.stringify(form),
      // });
      // const data = await res.json();

      // console.log(data);
      // if (data.success) {
      //   setIsLoading(false);
      //   toast.success("Login successfull");
      // }
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
