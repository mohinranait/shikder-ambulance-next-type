import React from "react";
import { FaTrash } from "react-icons/fa6";

const AddNewRow = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white border border-slate-200 p-3">
        <div>
          <label htmlFor="" className="flex mb-[2px]">
            Description
          </label>
          <textarea
            name=""
            id=""
            rows={3}
            placeholder="Write your message..."
            className=" border-slate-300 border-1 m-0 placeholder:text-slate-200 p-0 focus-visible:outline-offset-0  bg-transparent text-white w-full focus-visible:outline-primary py-2 rounded px-3 "
          ></textarea>
        </div>
      </div>
      <div className="bg-white border border-slate-200 p-3">
        <div>
          <div className="border-b mb-3 flex justify-between items-center border-slate-200">
            <p className="text-lg  text-slate-700 font-semibold pb-2">Layout</p>
            <button
              type="button"
              className="bg-red-100 text-red-500 p-2 mb-1 rounded-md "
            >
              <FaTrash />
            </button>
          </div>
          <label htmlFor="" className="flex mb-[2px]">
            Description
          </label>
          <textarea
            name=""
            id=""
            rows={3}
            placeholder="Write your message..."
            className=" border-slate-300 border-1 m-0 placeholder:text-slate-200 p-0 focus-visible:outline-offset-0  bg-transparent text-white w-full focus-visible:outline-primary py-2 rounded px-3 "
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddNewRow;
