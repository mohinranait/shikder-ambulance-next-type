"use client";

import React, { useState, useEffect, FC, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type Props = {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
};
const QuillEditor: FC<Props> = ({ editorValue, setEditorValue }) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const handleImageUpload = () => {
    const quill = quillRef.current?.getEditor();
    if (!quill) {
      console.error("Quill instance is not initialized.");
      return;
    }

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        // Replace this URL with your image upload API endpoint
        const uploadUrl = "https://your-api-endpoint/upload-image";

        try {
          const response = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
          });

          const data = await response.json();
          const imageUrl = data.url; // Adjust based on your API's response

          if (imageUrl) {
            const quill = quillRef.current?.getEditor(); // Access the Quill instance
            const range = quill?.getSelection();
            if (range) {
              // quill.insertEmbed(range.index, "image", imageUrl);
            }
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: () => handleImageUpload(),
      },
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
        ref={quillRef}
        value={editorValue}
        onChange={handleChange}
        theme="snow"
        modules={modules}
      />
    </div>
  );
};

export default QuillEditor;
