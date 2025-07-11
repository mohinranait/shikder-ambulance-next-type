"use client";
import * as Yup from "yup";
import React, { ChangeEvent, FormEvent, useState } from "react";
import InputElement from "../elements/InputElement";
import { Button } from "@nextui-org/button";
import { contactFormSchema } from "@/velidations/contactSchema";
import toast from "react-hot-toast";
import { BASE_URL } from "@/config/accessEnv";
type TError = Record<string, string | null>;
type TFromType = {
  fullName: string;
  phone: string;
  email: string;
  from: string;
  to: string;
  message: string;
};
const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<TError>({});
  const [form, setForm] = useState<TFromType>({
    fullName: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    message: "",
  });

  // handle contact from
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await contactFormSchema.validate(form, {
        abortEarly: false,
      });
      setError({});
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/contact-mail`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setIsLoading(false);
        toast.success("Email send successfully");
        setForm({
          fullName: "",
          phone: "",
          email: "",
          from: "",
          to: "",
          message: "",
        });
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: TError = {};

        error.inner.forEach((e: Yup.ValidationError) => {
          if (e.path) {
            validationErrors[e.path] = e.message;
          }
        });

        setError(validationErrors);
      } else {
        console.error(error);
        // setIsLoading(false);
        toast.error("Somthing wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid lg:grid-cols-2 gap-4  ">
        <InputElement
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
          value={form?.fullName}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              fullName: e,
            }))
          }
          error={error?.fullName}
        />

        <InputElement
          name="phone"
          type="number"
          className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
          placeholder="Number"
          value={form?.phone}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              phone: e,
            }))
          }
          error={error?.phone}
        />
      </div>
      <InputElement
        name="email"
        type="string"
        className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
        placeholder="Email"
        value={form?.email}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            email: e,
          }))
        }
        error={error?.email}
      />
      <div className="grid lg:grid-cols-2 gap-4  ">
        <InputElement
          name="from"
          type="text"
          placeholder="Patient address"
          className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
          value={form?.from}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              from: e,
            }))
          }
          error={error?.from}
        />

        <InputElement
          name="to"
          type="text"
          className="border-slate-200 !border focus-visible:border-1 focus-visible:border-primary"
          placeholder="Destination"
          value={form?.to}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              to: e,
            }))
          }
          error={error?.to}
        />
      </div>

      <div className=" rounded backdrop-blur-md bg-opacity-20">
        <textarea
          name="message"
          id=""
          rows={3}
          placeholder="Write your message..."
          className="border-1  border-slate-200 m-0 placeholder:text-slate-400 p-0 focus-visible:outline-offset-0 focus-visible:outline-none focus-visible:border-primary w-full  py-2 rounded px-3 "
          value={form?.message}
          maxLength={150}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              message: e.target.value,
            }))
          }
        ></textarea>
        {error?.message && (
          <p className="text-red-600 text-xs">{error?.message}</p>
        )}
      </div>
      <div>
        <Button
          isLoading={isLoading}
          type="submit"
          className="bg-primary w-full text-white rounded-md px-8"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
