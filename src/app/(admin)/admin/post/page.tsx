"use client";

import ImageUploadCom from "@/common/ImageUploadCom";
import { MarkdownEditor } from "@/components/elements/ForwardRefEditor";
import InputElement from "@/components/elements/InputElement";
import QuillEditor from "@/components/elements/QuillEditor";
import BlogView from "@/components/pages/blogs/BlogView";
import useAxios from "@/hooks/useAxios";
import { useAuth } from "@/providers/AuthProvider";
import { TPostFormData } from "@/types/post.types";
import { MDXEditorMethods } from "@mdxeditor/editor";

import { Button } from "@nextui-org/button";
import { Save } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { TagsInput } from "react-tag-input-component";
import { Select, SelectItem } from "@nextui-org/react";
export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const NewPost = () => {
  const path = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const urlSlug = params?.get("link");
  const axios = useAxios();
  const [isView, setIsView] = useState<boolean>(false);
  const [updatePost, setUpdatePost] = useState<TPostFormData | null>();
  const [isEditSlug, setIsEditSlug] = useState<boolean>(false);
  const [content, setContent] = useState<string>("# Hello");
  const editorRef = useRef<MDXEditorMethods>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [isSlug, setIsSlug] = useState<string>("");
  const [formLoading, setFormLoading] = useState<boolean>(false);

  // const [setslugUpdate, setSetslugUpdate] = useState<boolean>(false);
  const [form, setForm] = useState<TPostFormData>({
    title: "",
    author: user?._id || "",
    slug: "",
    shortDescription: "",
    contactNumber: "",
    content: "",
    image: {
      featuresImage: "",
      thumbnail: "",
    },
    layouts: {
      banner: true,
      sidebar: "posts",
      isSidebar: "right",
      comments: true,
    },
    seoTitle: "",
    status: "Publish",
    seoDescription: "",
    seoKeyword: [],
  });

  // const onChangeMarkdown = () => {
  //   const text = editorRef.current?.getMarkdown();
  //   setContent(text ?? "# Hello");
  // };

  console.log(content);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form?.title || form?.title?.trim() == "") {
      toast.error("Post title is required");
      return;
    }
    try {
      setFormLoading(true);
      if (params?.get("link")) {
        const { data } = await axios.patch(`/post/${updatePost?._id}`, {
          ...form,
          content,
          seoKeyword: tags,
        });
        if (data?.success) {
          router.push(`${path}?link=${data?.payload?.post?.slug}`);
          // editorRef.current?.setMarkdown("");
        } else {
          toast.error("Somthing wrong");
        }
      } else {
        const { data } = await axios.post(`/post`, {
          ...form,
          content,
          seoKeyword: tags,
        });
        console.log(data);
        if (data?.success) {
          setUpdatePost(data?.payload?.post);
          router.push(`${path}?link=${data?.payload?.post?.slug}`);
          // editorRef.current?.setMarkdown("");
        }
      }
      setFormLoading(false);
    } catch (error) {
      setFormLoading(false);
      toast.error("Somthing wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (urlSlug) {
      (async function () {
        try {
          const { data } = await axios.get(`/post/${urlSlug}`);
          if (data?.success) {
            setUpdatePost(data?.payload?.post);
            setForm((prev) => ({ ...prev, ...data?.payload?.post }));
            setTags(data?.payload?.post?.seoKeyword);
            setContent(data?.payload?.post?.content);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [urlSlug, axios]);

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex w-full justify-between  ">
          <p className="text-lg font-semibold text-slate-600">Post</p>
          <div className="flex gap-2 items-center">
            <Button
              type="button"
              className="bg-slate-900  text-white py-1 px-4 rounded"
              onClick={() => setIsView(true)}
            >
              Quick View
            </Button>
            <Button
              type="submit"
              className="bg-primary text-white py-1 px-4 rounded"
              isLoading={formLoading && true}
            >
              {!formLoading && <Save size={18} />}
              {params?.get("link") ? "Update" : "Save"}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <InputElement
              name="title"
              type="text"
              label="Post Title"
              placeholder="Enter title"
              value={form?.title}
              onChange={(e) => {
                setForm((prev) => {
                  const update = { ...prev, title: e };
                  const sl = update?.title?.split(" ").join("-").toLowerCase();

                  setIsSlug(sl);
                  return update;
                });
                if (form?.title) {
                }
              }}
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
                    value={form?.slug || ""}
                    onChange={(e) => setForm((prev) => ({ ...prev, slug: e }))}
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
                    {form?.slug ? form?.slug : isSlug}
                  </Link>
                  <FaEdit
                    className="cursor-pointer"
                    onClick={() => {
                      setIsEditSlug(true);
                      setForm((prev) => ({ ...prev, slug: isSlug }));
                    }}
                  />
                </React.Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          <div className="xl:col-span-2 2xl:col-span-3 flex flex-col gap-3 ">
            <div className="bg-white border border-slate-200 p-3">
              <QuillEditor
                editorValue={content || ""}
                setEditorValue={setContent}
              />

              <div className="mt-4">
                <label htmlFor="" className="flex mb-[2px]">
                  Short Description
                </label>
                <textarea
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      shortDescription: e?.target?.value,
                    }))
                  }
                  name=""
                  id=""
                  rows={3}
                  value={form?.shortDescription}
                  placeholder="Write your message..."
                  className=" border-slate-300 border-1 m-0 text-slate-800 placeholder:text-slate-200 p-0 focus-visible:outline-offset-0  bg-transparent  w-full focus-visible:outline-primary py-2 rounded px-3 "
                ></textarea>
              </div>

              {/* <MarkdownEditor
                ref={editorRef}
                markdown={content}
                onChange={onChangeMarkdown}
              /> */}
            </div>
            <div className="bg-white border border-slate-200 p-3">
              <div className="border-b mb-3 border-slate-200">
                <p className="text-base  text-slate-700 font-semibold pb-2">
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
                  value={form?.seoTitle || ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, seoTitle: e }))
                  }
                />

                <div>
                  <label htmlFor="" className="flex mb-[2px]">
                    Description
                  </label>
                  <textarea
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        seoDescription: e?.target?.value,
                      }))
                    }
                    name=""
                    id=""
                    rows={3}
                    value={form?.seoDescription}
                    placeholder="Write your message..."
                    className=" border-slate-300 border-1 m-0 text-slate-800 placeholder:text-slate-200 p-0 focus-visible:outline-offset-0  bg-transparent  w-full focus-visible:outline-primary py-2 rounded px-3 "
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="" className="flex mb-[2px]">
                    Tags
                  </label>
                  <TagsInput
                    value={tags}
                    onChange={setTags}
                    name="fruits"
                    placeHolder="Enter tags"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <div className="bg-white border border-slate-200 p-3 ">
              <div className="border-b mb-3 border-slate-200">
                <p className="text-base  text-slate-700 font-semibold pb-2">
                  Canvas layout
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
                      value={"none"}
                      checked={
                        form?.layouts?.isSidebar == "none" ? true : false
                      }
                      name="cances"
                      className="hidden peer"
                      onChange={(e) =>
                        setForm((prev: TPostFormData) => ({
                          ...prev,
                          layouts: {
                            ...prev.layouts,
                            isSidebar: "none",
                          },
                        }))
                      }
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
                      value={"left"}
                      name="cances"
                      className="hidden peer"
                      checked={form?.layouts?.isSidebar == "left"}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          layouts: {
                            ...prev.layouts,
                            isSidebar: "left",
                          },
                        }))
                      }
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
                      value={"right"}
                      name="cances"
                      className="hidden peer"
                      checked={
                        form?.layouts?.isSidebar == "right" ? true : false
                      }
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          layouts: {
                            ...prev.layouts,
                            isSidebar: "right",
                          },
                        }))
                      }
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Right Sidebar
                  </label>
                  <label
                    htmlFor="both"
                    className="py-1 px-2 flex gap-2  cursor-pointer rounded-md items-center"
                  >
                    <input
                      id="both"
                      type="radio"
                      value={"both"}
                      name="cances"
                      className="hidden peer"
                      checked={
                        form?.layouts?.isSidebar == "both" ? true : false
                      }
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          layouts: {
                            ...prev.layouts,
                            isSidebar: "both",
                          },
                        }))
                      }
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Dual Sidebar
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-3 ">
              <div className="border-b mb-3 border-slate-200">
                <p className="text-base  text-slate-700 font-semibold pb-2">
                  Attributes
                </p>
              </div>
              <div>
                <div className="text-slate-600 mb-2 flex flex-col gap-1">
                  <label
                    htmlFor="bshow"
                    className="py-1 px-2 flex gap-2 cursor-pointer  rounded-md items-center"
                  >
                    <input
                      id="bshow"
                      type="radio"
                      value={"true"}
                      checked={form?.layouts?.banner == true}
                      name="banner"
                      className="hidden peer"
                      onChange={(e) =>
                        setForm((prev: TPostFormData) => ({
                          ...prev,
                          layouts: {
                            ...prev.layouts,
                            banner: true,
                          },
                        }))
                      }
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Banner is visiable;
                  </label>
                  <label
                    htmlFor="bhide"
                    className="py-1 px-2 flex gap-2  cursor-pointer rounded-md items-center"
                  >
                    <input
                      id="bhide"
                      type="radio"
                      value={"false"}
                      name="banner"
                      className="hidden peer"
                      checked={form?.layouts?.banner == false}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          layouts: {
                            ...prev.layouts,
                            banner: false,
                          },
                        }))
                      }
                    />{" "}
                    <div className="w-4 h-4 rounded-full border-2 p-1 border-gray-300 peer-checked:border-primary  transition peer-checked:before:w-2 peer-checked:before:h-2 peer-checked:before:bg-primary peer-checked:before:absolute peer-checked:before:rounded-full peer-checked:before:top-2/4 peer-checked:before:left-2/4 relative peer-checked:before:-translate-x-2/4 peer-checked:before:-translate-y-2/4 "></div>
                    Banner is hidden;
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      status: e.target.value as "Publish" | "Unpublish",
                    }))
                  }
                  className="w-full py-[10px] focus-visible:outline-none border rounded border-slate-300"
                  id="status"
                >
                  <option
                    value="Publish"
                    selected={form?.status === "Publish"}
                    className="py-1 px-3"
                  >
                    Public
                  </option>
                  <option
                    value="Unpublish"
                    selected={form?.status === "Unpublish"}
                    className="py-1 px-3"
                  >
                    Un-Public
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="status">User comments</label>
                <select
                  name="status"
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      layouts: {
                        ...prev?.layouts,
                        comments: e.target.value === "true" ? true : false,
                      },
                    }))
                  }
                  className="w-full py-[10px] focus-visible:outline-none border rounded border-slate-300"
                  id="status"
                >
                  <option
                    value={"true"}
                    selected={form?.layouts?.comments === true && true}
                    className="py-1 px-3"
                  >
                    Show comment
                  </option>
                  <option
                    value={"false"}
                    selected={form?.layouts?.comments === false && false}
                    className="py-1 px-3"
                  >
                    Hide comment
                  </option>
                </select>
              </div>
              <div>
                <InputElement
                  name="contactNumber"
                  type="text"
                  label="Contact Number"
                  placeholder="Enter phone"
                  value={form?.contactNumber || ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, contactNumber: e }))
                  }
                />
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-3 ">
              <div className="border-b mb-3 border-slate-200">
                <p className="text-base  text-slate-700 font-semibold pb-2">
                  Feature image
                </p>
              </div>
              <div>
                <ImageUploadCom
                  url={form?.image?.featuresImage || ""}
                  cb={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      image: {
                        ...prev.image,
                        featuresImage: e,
                      },
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      {isView && (
        <div className="absolute bottom-0 top-0 left-0 w-full right-0 min-h-screen bg-[#f5f5f5] z-[9999]">
          <span
            onClick={() => setIsView(false)}
            className="w-10 h-10 cursor-pointer  rounded-full bg-slate-200 flex items-center justify-center  top-3 right-3 fixed"
          >
            <RxCross2 />{" "}
          </span>
          <BlogView blog={form} />
        </div>
      )}
    </div>
  );
};

export default NewPost;
