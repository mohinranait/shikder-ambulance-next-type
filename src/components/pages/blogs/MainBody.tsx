import { TPostFormData } from "@/types/post.types";
import React, { FC } from "react";

type Props = {
  blog: TPostFormData;
};
const MainBody: FC<Props> = ({ blog }) => {
  return (
    <React.Fragment>
      <h2 className="text-2xl mb-2 font-bold text-slate-900">
        Shikder ambulance
      </h2>
      {blog?.content}
    </React.Fragment>
  );
};

export default MainBody;
