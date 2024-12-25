"use client";

import React, { useState, useEffect, FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type Props = {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
};
const QuillEditor: FC<Props> = ({ editorValue, setEditorValue }) => {
  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        ["link"],
        [{ align: [] }],
      ],
    },
  };

  const handleChange = (value: string) => {
    setEditorValue(value);
  };

  useEffect(() => {
    // Any required effect, like loading Quill modules, can go here
  }, []);

  return (
    <div className="quill-editor">
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        theme="snow"
        modules={modules}
      />
    </div>
  );
};

export default QuillEditor;
