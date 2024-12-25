import UpdateProfileForm from "@/components/dashboard/users/UpdateProfileForm";
import InputElement from "@/components/elements/InputElement";
import React from "react";

const UpdateUserInformation = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between items-center py-3 px-3 rounded shadow-md bg-white">
          <p className="text-lg font-semibold text-slate-600">Update profile</p>
        </div>

        <div>
          <UpdateProfileForm />
        </div>
      </div>
    </div>
  );
};

export default UpdateUserInformation;
