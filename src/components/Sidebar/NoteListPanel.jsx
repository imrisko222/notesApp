import React from "react";
import Button from "../Buttons/Button";
import NoteList from "./NoteList";
import PlusIcon from "../icons/plus.svg?react";
import styles from "./Sidebar.module.css";

const NoteListPanel = () => {
  return (
    <div className={styles.allListContainer}>
      <Button icon={<PlusIcon />} align="left">
        Create New Note
      </Button>
      <NoteList />
    </div>
  );
};

export default NoteListPanel;
