import { Button } from "@nextui-org/button";
import React from "react";

const AllPosts = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between items-center py-3 px-3 rounded shadow-md bg-white">
        <p className="text-lg font-semibold text-slate-600">Posts</p>
      </div>
      <div className="flex justify-between items-center">
        <Button className="bg-primary text-white py-1 rounded ">
          Add New Post
        </Button>
        <div>
          <input
            placeholder="Search..."
            type="search"
            className="border-slate-300 border py-1 px-2 focus-visible:outline-none focus-visible:border-primary rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="overflow-x-auto ">
          <table className=" w-full shadow-md   mx-auto border-gray-100  ">
            <thead>
              <tr className="bg-white text-slate-900">
                <th className="py-3 px-6 font-medium text-left ">Name</th>
                <th className="py-3 px-6 font-medium text-left ">Age</th>
                <th className="py-3 px-6 font-medium text-left ">Gender</th>
                <th className="py-3 px-6 font-medium   text-end">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b border-slate-300">Shiyam </td>
                <td className="py-4 px-6 border-b border-slate-300">19</td>
                <td className="py-4 px-6 border-b border-slate-300">Male</td>
                <td className="py-4 px-6 border-b border-slate-300 text-end">
                  Mirpur 15, Dhaka
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b border-slate-300">Shiyam </td>
                <td className="py-4 px-6 border-b border-slate-300">19</td>
                <td className="py-4 px-6 border-b border-slate-300">Male</td>
                <td className="py-4 px-6 border-b border-slate-300 text-end">
                  Mirpur 15, Dhaka
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b border-slate-300">Shiyam </td>
                <td className="py-4 px-6 border-b border-slate-300">19</td>
                <td className="py-4 px-6 border-b border-slate-300">Male</td>
                <td className="py-4 px-6 border-b border-slate-300 text-end">
                  Mirpur 15, Dhaka
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
