"use client";
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CodeToggle,
  CreateLink,
  linkDialogPlugin,
  DiffSourceToggleWrapper,
  diffSourcePlugin,
  imagePlugin,
  InsertImage,
  InsertTable,
  tablePlugin,
  InsertThematicBreak,
  ListsToggle,
  SingleChoiceToggleGroup,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  async function imageUploadHandler(image: File) {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("/uploads/new", {
      method: "POST",
      body: formData,
    });
    const json = (await response.json()) as { url: string };
    return json.url;
  }

  return (
    <MDXEditor
      className="light"
      plugins={[
        toolbarPlugin({
          toolbarClassName: "my-classname",
          toolbarContents: () => (
            <>
              <DiffSourceToggleWrapper>
                <UndoRedo />
                <ListsToggle />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CodeToggle />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
              </DiffSourceToggleWrapper>
            </>
          ),
        }),
        headingsPlugin(),

        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        imagePlugin({ imageUploadHandler }),
        linkDialogPlugin(),
        thematicBreakPlugin(),
        tablePlugin(),
        diffSourcePlugin({
          viewMode: "rich-text",
          diffMarkdown: "### Diff Content Here",
        }),
        listsPlugin(),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
