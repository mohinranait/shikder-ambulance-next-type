import { TMediaType } from "@/types/media.type";
import Image from "next/image";
import React, { FC, useState } from "react";

type Props = {
  img: TMediaType;
  setSelectedImg: React.Dispatch<React.SetStateAction<TMediaType | null>>;
};
const ImageCard: FC<Props> = ({ img, setSelectedImg }) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div
      onClick={() => {
        setSelectedImg(img);
        setSelected(img?._id);
      }}
      className={`border  cursor-pointer flex flex-col gap-2  rounded-md ${
        selected === img?._id ? "border-primary" : "border-slate-300"
      } `}
    >
      <div className="w-full overflow-hidden">
        <Image
          src={img?.fileUrl}
          width={100}
          height={100}
          alt="image"
          className="w-full max-h-[120px] object-cover rounded"
        />
      </div>
      {/* <div className="py-1 px-2">
        <p className="text-sm text-slate-500">photo.png</p>
      </div> */}
    </div>
  );
};

export default ImageCard;
