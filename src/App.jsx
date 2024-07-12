import BlockNote from "./components/BlockNote";
import EditorPlace from "./components/EditorPlace";
function App() {
  return <BlockNote />;
}

export default App;

// function App() {
//   // const DEFAULT_INITIAL_DATA = {
//   //   time: new Date().getTime(),
//   //   blocks: [
//   //     {
//   //       type: "header",
//   //       data: {
//   //         text: "Default TEXT!",
//   //         level: 1,
//   //       },
//   //     },
//   //   ],
//   // };

//   const initEditor = () => {
//     const editor = new EditorJS({
//       holder: "editorjs",
//       onReady: () => {
//         ejInstance.current = editor;
//       },
//       autofocus: true,
//       onChange: async () => {
//         let content = await editor.saver.save();

//         console.log(content);
//       },
//       // logLevel: "VERBOSE",
//       placeholder: "Let`s write an awesome story!",
//       tools: {
//         header: {
//           class: Header,
//           inlineToolbar: true,
//           config: {
//             placeholder: "Header",
//           },
//           shortcut: "CMD+SHIFT+H",
//         },
//         list: {
//           class: List,
//           inlineToolbar: ["link"],
//         },
//         table: {
//           class: Table,
//           inlineToolbar: true,
//           config: {
//             rows: 2,
//             cols: 12,
//           },
//         },
//       },

//       // data: DEFAULT_INITIAL_DATA,
//     });
//   };

//   const ejInstance = useRef();

//   useEffect(() => {
//     if (ejInstance.current === null) {
//       initEditor();
//     }

//     return () => {
//       ejInstance?.current?.destroy();
//       ejInstance.current = null;
//     };
//   }, []);

//   return <div id="editorjs"></div>;
// }
