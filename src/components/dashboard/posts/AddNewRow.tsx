"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { MDXEditorMethods } from "@mdxeditor/editor";

// Dynamically import the MDXTextareaElement
const Editor = dynamic(
  () => import("@/components/elements/MDXTextareaElement"),
  {
    ssr: false,
  }
);

const AddNewRow = () => {
  const ref = useRef<MDXEditorMethods | null>(null); // Ref for MDXEditor
  const [isDescription, setIsDescription] = useState<string>("Initial content");

  return (
    <div className="flex flex-col gap-2">
      {/* Editor Component */}
      <div className="bg-white border border-slate-200 p-3">
        <Editor
          ref={ref}
          markdown={isDescription}
          onChange={(value) => setIsDescription(value)}
          data-gramm="false"
        />
      </div>
    </div>
  );
};

export default AddNewRow;
