"use client";
import AddNewRow from "@/components/dashboard/posts/AddNewRow";
import InputElement from "@/components/elements/InputElement";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const NewPost = () => {
  const [isEditSlug, setIsEditSlug] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <form action="" className="flex flex-col gap-3">
        <div className="flex w-full justify-between  ">
          <p className="text-lg font-semibold text-slate-600">Post</p>
          <Button className="bg-primary text-white py-1 px-6 rounded">
            Save
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <InputElement
              name="title"
              type="text"
              label="Post Title"
              placeholder="Enter title"
              value=""
              onChange={() => {}}
            />
          </div>
          <div>
            <p className="flex items-center gap-1">
              Permalinks:{" "}
              {isEditSlug ? (
                <React.Fragment>
                  <InputElement
                    type="text"
                    name="slug"
                    placeholder="Enter slug"
                    className="py-[2px] focus-visible:border-slate-200 focus-visible:outline-slate-200 "
                    value=""
                    onChange={() => {}}
                  />
                  <Button
                    type="button"
                    className="py-1 h-[26px] rounded px-1  bg-white border-2 text-primary border-primary"
                    onClick={() => setIsEditSlug(false)}
                  >
                    Save Slug
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link className="text-blue-500 hover:underline" href="">
                    dhaka-ambulance-service
                  </Link>
                  <FaEdit
                    className="cursor-pointer"
                    onClick={() => setIsEditSlug(true)}
                  />
                </React.Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          <div className="xl:col-span-2 2xl:col-span-3 flex flex-col gap-3 ">
            <AddNewRow />
            <div className="bg-white border border-slate-200 p-3">
              <div className="border-b mb-3 border-slate-200">
                <p className="text-lg  text-slate-700 font-semibold pb-2">
                  Post SEO
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <InputElement
                  type="text"
                  name="meta_title"
                  label="SEO Title"
                  placeholder="SEO title"
                  className="!border-slate-300 border-1 !py-2"
                  value=""
                  onChange={() => {}}
                />

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
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <div className="bg-white border border-slate-200 p-3 ">
              <div className="border-b mb-3 border-slate-200">
                <p className="text-lg  text-slate-700 font-semibold pb-2">
                  Layout
                </p>
              </div>
              <div>
                <div className="text-slate-600 flex flex-col gap-2">
                  <label
                    htmlFor="fullWidth"
                    className="py-1 px-2 flex gap-2 cursor-pointer  rounded-md items-center"
                  >
                    <input
                      id="fullWidth"
                      type="radio"
                      value={"Full Width"}
                      name="cances"
                      className="hidden peer"
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Full Width
                  </label>
                  <label
                    htmlFor="leftSidebar"
                    className="py-1 px-2 flex gap-2  cursor-pointer rounded-md items-center"
                  >
                    <input
                      id="leftSidebar"
                      type="radio"
                      value={"Left Sidebar"}
                      name="cances"
                      className="hidden peer"
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Left Sidebar
                  </label>
                  <label
                    htmlFor="rightSidebar"
                    className="py-1 px-2 flex gap-2  cursor-pointer rounded-md items-center"
                  >
                    <input
                      id="rightSidebar"
                      type="radio"
                      value={"Right Sidebar"}
                      name="cances"
                      className="hidden peer"
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Right Sidebar
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-3 ">
              <div className="border-b mb-3 border-slate-200">
                <p className="text-lg  text-slate-700 font-semibold pb-2">
                  Feature image
                </p>
              </div>
              <div>
                <div className="text-slate-600 flex flex-col gap-2">
                  <label
                    htmlFor="fullWidth"
                    className="py-1 px-2 flex gap-2 cursor-pointer  rounded-md items-center"
                  >
                    <input
                      id="fullWidth"
                      type="radio"
                      value={"Full Width"}
                      name="cances"
                      className="hidden peer"
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Full Width
                  </label>
                  <label
                    htmlFor="leftSidebar"
                    className="py-1 px-2 flex gap-2  cursor-pointer rounded-md items-center"
                  >
                    <input
                      id="leftSidebar"
                      type="radio"
                      value={"Left Sidebar"}
                      name="cances"
                      className="hidden peer"
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Left Sidebar
                  </label>
                  <label
                    htmlFor="rightSidebar"
                    className="py-1 px-2 flex gap-2  cursor-pointer rounded-md items-center"
                  >
                    <input
                      id="rightSidebar"
                      type="radio"
                      value={"Right Sidebar"}
                      name="cances"
                      className="hidden peer"
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Right Sidebar
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
