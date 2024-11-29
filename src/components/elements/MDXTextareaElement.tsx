"use client";

import React, { forwardRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  tablePlugin,
  InsertTable,
  CreateLink,
  InsertImage,
  BlockTypeSelect,
  ListsToggle,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
} from "@mdxeditor/editor";

const MDXTextareaElement = forwardRef<MDXEditorMethods, MDXEditorProps>(
  ({ ...props }, ref) => {
    return (
      <div>
        <MDXEditor
          {...props}
          ref={ref} // Forward the ref to the MDXEditor instance
          plugins={[
            tablePlugin(),
            toolbarPlugin({
              toolbarClassName: "my-classname",
              toolbarContents: () => (
                <>
                  <BoldItalicUnderlineToggles />
                  <BlockTypeSelect />
                  <UndoRedo />
                  <InsertTable />
                  <CreateLink />
                  <InsertImage />
                  <ListsToggle />
                </>
              ),
            }),
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),
            linkPlugin(),
            linkDialogPlugin({
              linkAutocompleteSuggestions: [
                "https://picsum.photos/200/300",
                "https://picsum.photos/200",
              ],
            }),
            imagePlugin({
              imageUploadHandler: () =>
                Promise.resolve("https://picsum.photos/200/300"),
              imageAutocompleteSuggestions: [
                "https://picsum.photos/200/300",
                "https://picsum.photos/200",
              ],
            }),
          ]}
        />
      </div>
    );
  }
);

MDXTextareaElement.displayName = "MDXTextareaElement";

export default MDXTextareaElement;
