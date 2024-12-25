"use client";
import InputElement from "@/components/elements/InputElement";
import { useAuth } from "@/providers/AuthProvider";
import { TUser } from "@/types/usersTypes";
import React, { useEffect, useState } from "react";

type TUpdateForm = {
  name: {
    firstName: string;
    lastName?: string;
  };
  profile?: string;
  email?: string;
  status: "Active" | "Pending" | "Banned";
};
const UpdateProfileForm = () => {
  const { user } = useAuth();
  const [form, setForm] = useState<TUpdateForm>({
    name: {
      firstName: "",
      lastName: "",
    },
    profile: "",
    status: "Active",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: {
          firstName: user?.name?.firstName || "",
          lastName: user?.name?.lastName || "",
        },
        status: user?.status as "Active" | "Pending" | "Banned",
        profile: user?.profile || "",
      });
    }
  }, [user]);
  return (
    <form action="">
      <div className="flex gap-3 ">
        <InputElement
          name="firstName"
          type="text"
          label="First Name"
          value={form?.name?.firstName}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              name: { ...prev.name, firstName: e },
            }))
          }
        />
        <InputElement
          name="lastName"
          type="text"
          label="Last Name"
          value={form?.name?.lastName || ""}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              name: { ...prev.name, lastName: e },
            }))
          }
        />
      </div>
    </form>
  );
};

export default UpdateProfileForm;
