"use client";
import React, { FormEvent, useState } from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export type TUserCreate = {
  name: {
    firstName: string;
    lastName?: string;
  };
  email: string;
  password: string;
  rePassword: string;
  status: string;
};

type TError = {
  name: null | string;
  email: null | string;
  password: null | string;
  rePassword: null | string;
  passNotMatch: null | string;
};

const RegisterForm = () => {
  const [error, setError] = useState<TError>({
    name: null,
    email: null,
    password: null,
    rePassword: null,
    passNotMatch: null,
  });

  const [form, setForm] = useState<TUserCreate>({
    name: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
    rePassword: "",
    status: "Pending",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/user/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="text-2xl text-slate-800 font-semibold">Register </h1>
      <div className="flex flex-col gap-4 mt-4">
        <InputElement
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter name"
          className="!border-slate-300 border-1"
          value={form?.name?.firstName}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              name: { ...form?.name, firstName: e },
            }))
          }
        />
        <InputElement
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          className="!border-slate-300 border-1"
          value={form?.email}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              email: e,
            }))
          }
        />
        <InputElement
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
          className="!border-slate-300 border-1"
          value={form?.password}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              password: e,
            }))
          }
        />
        <InputElement
          label="Re-Password"
          name="password"
          type="password"
          placeholder="Enter Re-password"
          className="!border-slate-300 border-1"
          value={form?.rePassword}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              rePassword: e,
            }))
          }
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
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
