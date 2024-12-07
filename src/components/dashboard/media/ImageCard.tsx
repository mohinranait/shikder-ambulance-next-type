import Image from "next/image";
import React, { FC } from "react";

type Props = {
  selected?: boolean;
};
const ImageCard: FC<Props> = ({ selected }) => {
  return (
    <div
      className={`border cursor-pointer flex flex-col gap-2  rounded-md ${
        selected ? "border-primary" : "border-slate-300"
      } `}
    >
      <div className="w-full overflow-hidden">
        <Image
          src={"/images/contact-img.webp"}
          width={100}
          height={100}
          alt="image"
          className="w-full rounded-t"
        />
      </div>
      <div className="py-1 px-2">
        <p className="text-sm text-slate-500">photo.png</p>
      </div>
    </div>
  );
};

export default ImageCard;
