"use client";

import dynamic from "next/dynamic";
import type { Editor } from "@ckeditor/ckeditor5-core";
import type {
  EditorWatchdog,
  ContextWatchdog,
} from "@ckeditor/ckeditor5-watchdog";

const CKEditorComponent = dynamic(
  () => {
    return Promise.all([
      import("@ckeditor/ckeditor5-react"),
      import("@ckeditor/ckeditor5-build-classic"),
    ]).then(([CKEditorModule, ClassicEditorModule]) => {
      const { CKEditor } = CKEditorModule;
      const ClassicEditor = ClassicEditorModule.default;

      // Type assertion to match expected interface
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
          <CKEditor
            editor={EditorWithWatchdog}
            data={value}
            onChange={(_, editor) => onChange(editor.getData())}
          />
        );
      };
    });
  },
  {
    ssr: false,
    loading: () => <div>Loading editor...</div>,
  },
);

export default CKEditorComponent;
