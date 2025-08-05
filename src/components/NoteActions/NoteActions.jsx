import React from "react";
import Button from "../Buttons/Button";
import AchiveIcon from "../icons/archive.svg?react";
import DeleteIcon from "../icons/delete.svg?react";
import styles from "./NoteActions.module.css";
const NoteActions = () => {
  return (
    <div className={styles.container}>
      <Button icon={<AchiveIcon />} textSize="textPreset4" variant="border">
        Archive Note
      </Button>
      <Button icon={<DeleteIcon />} textSize="textPreset4" variant="border">
        Delete Note
      </Button>
    </div>
  );
};

export default NoteActions;
