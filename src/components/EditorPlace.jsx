import { useContext, useEffect, useRef } from "react";
import { EditorContext } from "./EditorContext";

const EditorPlace = () => {
  const { initEditor } = useContext(EditorContext);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      initEditor();
      editorRef.current = true;
    }
  }, []);

  return <div id="editorjs"></div>;
};

export default EditorPlace;
