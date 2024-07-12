import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";
import "./BlockNote.css";

export default function BlockNote() {
  const [blocks, setBlocks] = useState([]);

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Initial Content",
      },
      {
        type: "heading",
        content: "This is a heading block",
      },
      {
        type: "paragraph",
        content: "This is a paragraph block",
      },
      {
        type: "paragraph",
      },
    ],
  });

  return (
    <div className={"wrapper"}>
      <div>BlockNote Editor:</div>
      <div className={"item"}>
        <BlockNoteView
          editor={editor}
          onChange={() => {
            setBlocks(editor.document);
          }}
        />
      </div>
      <div>Document JSON:</div>
      <div className={"item bordered"}>
        <pre>
          <code>{JSON.stringify(blocks, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
