const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";
import { Box } from "@chakra-ui/react";

import * as Quill from "quill";

export interface UnprivilegedEditor {
  getLength(): number;
  getText(index?: number, length?: number): string;
  getHTML(): string;
  getBounds(index: number, length?: number): Quill.BoundsStatic;
  getSelection(focus?: boolean): Quill.RangeStatic;
  getContents(index?: number, length?: number): Quill.DeltaStatic;
}

interface QuillProps {
  value: string;
  onChange?: (
    content: string,
    delta: Quill.Delta,
    source: Quill.Sources,
    editor: UnprivilegedEditor
  ) => void;
  className?: string;
}

const QuillEditor = ({ value, onChange }: QuillProps) => {
  console.log(value);
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <Box className="text-editor">
      <ReactQuill
        theme="snow"
        style={{ height: "200px", marginBottom: "50px" }}
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      ></ReactQuill>
    </Box>
  );
};

export default QuillEditor;
