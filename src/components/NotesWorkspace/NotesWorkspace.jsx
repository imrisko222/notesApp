import React from "react";
// components
import NoteListPanel from "../Sidebar/NoteListPanel";
import NoteActions from "../NoteActions/NoteActions";
import EditorPanel from "../EditorPanel/EditorPanel";
// styles
import styles from "./NotesWorkspace.module.css";

const NotesWorkspace = () => {
  return (
    <div className={styles.workspaceContainer}>
      <NoteListPanel />
      <EditorPanel />
      <NoteActions />
    </div>
  );
};

export default NotesWorkspace;
