"use client";

import { useImg } from "@/providers/ImageProvider";
import React, { useEffect, FC, useRef, useMemo, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
};
const QuillEditor: FC<Props> = ({ editorValue, setEditorValue }) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const { selectedImage, setSelectedImage, setImageModal } = useImg();

  const imageHandler = useCallback(() => {
    setImageModal(true);
  }, [setImageModal]);

  useEffect(() => {
    if (selectedImage && quillRef.current) {
      const editor = quillRef.current.getEditor();
      const url = selectedImage?.fileUrl;

      if (url) {
        const range = editor.getSelection();
        if (range) {
          editor.insertEmbed(range.index, "image", url);
        }
      }

      setImageModal(false);
      setSelectedImage(null);
    }
  }, [selectedImage, setImageModal, setSelectedImage]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          [
            {
              color: [
                "#000000", // Black
                "#FFFFFF", // White
                "#FF0000", // Red
                "#00FF00", // Green
                "#0000FF", // Blue
                "#FFFF00", // Yellow
                "#FFA500", // Orange
                "#800080", // Purple
                "#808080", // Gray
                "#00FFFF", // Cyan
                "#FFC0CB", // Pink
                "#8B0000", // Dark Red
                "#006400", // Dark Green
                "#00008B", // Dark Blue
                "#FFD700", // Gold
                "#A52A2A", // Brown
                "#800000", // Maroon
                "#4B0082", // Indigo
                "#F0E68C", // Khaki
                "#B0E0E6", // Powder Blue
              ],
            },
          ],
          [{ align: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, [imageHandler]);

  return (
    <div className="quill-editor">
      <ReactQuill
        theme="snow"
        ref={quillRef}
        value={editorValue}
        modules={modules}
        onChange={setEditorValue}
      />
    </div>
  );
};

export default QuillEditor;
