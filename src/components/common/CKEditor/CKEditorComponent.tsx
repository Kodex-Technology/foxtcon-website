"use client";

import dynamic from "next/dynamic";
import type { Editor } from "@ckeditor/ckeditor5-core";
import type {
  EditorWatchdog,
  ContextWatchdog,
} from "@ckeditor/ckeditor5-watchdog";
import Loader from "../Loader/Loader";

const CKEditorComponent = dynamic(
  () =>
    Promise.all([
      import("@ckeditor/ckeditor5-react"),
      import("@ckeditor/ckeditor5-build-classic"),
    ]).then(([CKEditorModule, ClassicEditorModule]) => {
      const { CKEditor } = CKEditorModule;
      const ClassicEditor = ClassicEditorModule.default;

      ClassicEditor.defaultConfig = {
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "blockQuote",
            "undo",
            "redo",
          ],
        },
        image: {
          toolbar: [],
        },
        table: {
          contentToolbar: [],
        },
        language: "en",
      };

      const EditorWithWatchdog = ClassicEditor as unknown as {
        create(...args: unknown[]): Promise<Editor>;
        EditorWatchdog: typeof EditorWatchdog;
        ContextWatchdog: typeof ContextWatchdog;
      };

      return function WrappedEditor({
        value,
        onChange,
      }: {
        value: string;
        onChange: (value: string) => void;
      }) {
        return (
          <>
            <CKEditor
              editor={EditorWithWatchdog}
              data={value}
              onChange={(_, editor) => onChange(editor.getData())}
            />
          </>
        );
      };
    }),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

export default CKEditorComponent;
