import moment from "moment";
import Image from "next/image";
import React, { FC } from "react";
import { FaStar } from "react-icons/fa6";
type TCommentType = {
  _id: string;
  autor?: string;
  content: string;
  star: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
type Props = {
  comments: TCommentType[];
};
const ShowAllComments: FC<Props> = ({ comments }) => {
  return (
    <ul className="flex flex-col p-5 bg-white divide-slate-200 divide-y-1 ">
      {comments?.map((item, idx) => (
        <li key={idx} className=" py-4   flex gap-2">
          <div>
            <div className="w-[50px]">
              <Image
                src={"/images/avater/profile1.png"}
                width={50}
                height={50}
                alt="avater"
                className="w-10 h-10 rounded-full ring-1 ring-primary ring-offset-2"
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <FaStar
                    key={star}
                    className={`${
                      item?.star >= star ? "text-yellow-500" : "text-slate-300"
                    }`}
                    size={16}
                  />
                ))}
              </div>

              <p>{item?.content}</p>
              <p className="text-sm text-slate-500">
                {moment(item?.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShowAllComments;
