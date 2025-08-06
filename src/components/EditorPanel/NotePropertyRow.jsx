import React from "react";
import styles from "./EditorPanel.module.css";

const NotePropertyRow = ({ icon, label, value }) => {
  return (
    <div className={styles.notePropertyRowContainer}>
      <span className={styles.labelContainer}>
        {icon}
        <span className={styles.label}>{label}</span>
      </span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default NotePropertyRow;
