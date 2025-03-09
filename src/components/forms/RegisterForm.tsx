"use client";
import React, { FormEvent, useState } from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BASE_URL } from "@/config/accessEnv";
import { userRegistrationSchemaValidation } from "@/velidations/registrationSchema";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
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

type TError = Record<string, string | null>;

const RegisterForm = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<TError>({});
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

  // If user is already login
  if (user) {
    router.push("/");
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Validate the form using Yup
      await userRegistrationSchemaValidation.validate(form, {
        abortEarly: false,
      });
      setError({});

      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/user/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data?.success) {
        toast.success(data?.message);
        router.push("/login");
      } else {
        toast.success(data?.message);
      }

      setIsLoading(false);
    } catch (err: unknown) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: TError = {};

        err.inner.forEach((e: Yup.ValidationError) => {
          if (e.path) {
            validationErrors[e.path] = e.message;
          }
        });

        setError(validationErrors);
      } else {
        console.error(err);
        setIsLoading(false);
        toast.error("Somthing wrong");
      }
    }
  };

  console.log(error);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="text-2xl text-slate-800 font-semibold">Register</h1>
      <div className="flex flex-col gap-4 mt-4">
        <InputElement
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Enter first name"
          className={` ${error["name.firstName"] && "!border-red-500"}`}
          value={form?.name?.firstName}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              name: { ...form.name, firstName: e },
            }))
          }
          error={error["name.firstName"]}
        />
        <InputElement
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Enter last name"
          className={` border-1 ${error["name.lastName"] && "!border-red-500"}`}
          value={form?.name?.lastName || ""}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              name: { ...form.name, lastName: e },
            }))
          }
          error={error["name.lastName"]}
        />
        <InputElement
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          className={` ${error.email && "!border-red-500"}`}
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              email: e,
            }))
          }
          error={error?.email}
        />
        <InputElement
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          className={` border-1 ${error.password && "!border-red-500"}`}
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              password: e,
            }))
          }
          error={error?.password}
        />
        <InputElement
          label="Re-Password"
          name="rePassword"
          type="password"
          placeholder="Re-enter password"
          className={` border-1 ${error?.rePassword && "!border-red-500"}`}
          value={form.rePassword}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              rePassword: e,
            }))
          }
          error={error?.rePassword}
        />
        <div>
          <Button
            type="submit"
            className="w-full bg-primary text-white rounded-md"
            isLoading={isLoading ? true : false}
            isDisabled={isLoading}
          >
            Register
          </Button>
        </div>
        <p className="text-slate-700 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
