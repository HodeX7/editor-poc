// eslint-disable-next-line no-undef
// const MermaidTool = require("editorjs-mermaid");
import MermaidTool from "editorjs-mermaid";
import { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Alert from "editorjs-alert";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Underline from "@editorjs/underline";
import ChangeCase from "editorjs-change-case";
import Strikethrough from "@sotaproject/strikethrough";
import Checklist from "@editorjs/checklist";
import SimpleImage from "@editorjs/simple-image";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import ColorPlugin from "editorjs-text-color-plugin";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
import editorjsCodeflask from "@calumk/editorjs-codeflask";

export const EditorContext = createContext();

function EditorContextProvider(props) {
  const editorInstanceRef = useRef(null);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "POC for RTE!",
      tools: {
        textAlignment: {
          class: AlignmentBlockTune,
          config: {
            default: "left",
            blocks: {
              header: "center",
            },
          },
        },
        paragraph: {
          class: Paragraph,
          tunes: ["textAlignment"],
        },
        header: {
          class: Header,
          inlineToolbar: true,
          tunes: ["textAlignment"],
          config: {
            placeholder: "Enter a Header",
            levels: [1, 2, 3, 4, 5],
            defaultLevel: 2,
          },
        },
        alert: {
          class: Alert,
          config: {
            defaultType: "primary",
            messagePlaceholder: "Enter something",
          },
        },
        list: {
          class: List,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
        },
        image: {
          class: SimpleImage,
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
            },
          },
        },
        underline: {
          class: Underline,
        },
        strikethrough: {
          class: Strikethrough,
        },
        Color: {
          class: ColorPlugin,
          config: {
            colorCollections: [
              "#EC7878",
              "#9C27B0",
              "#673AB7",
              "#3F51B5",
              "#0070FF",
              "#03A9F4",
              "#00BCD4",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFF",
            ],
            defaultColor: "#FF1300",
            type: "text",
          },
        },
        code: editorjsCodeflask,
        Marker: {
          class: Marker,
        },
        inlineCode: {
          class: InlineCode,
        },
        changeCase: {
          class: ChangeCase,
        },
        mermaid: MermaidTool,
      },
      onChange: async () => {
        const data = await editor.save();
        console.log(data);
      },
      // onReady: async () => {
      //   editor.blocks.renderFromHTML("<p>hi</p><div><h1>hey there</h1></div>");
      // },
    });

    editorInstanceRef.current = editor;
  };
  return (
    <EditorContext.Provider value={{ initEditor, editorInstanceRef }}>
      {props.children}
    </EditorContext.Provider>
  );
}

export default EditorContextProvider;
