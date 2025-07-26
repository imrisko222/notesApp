import React from "react";
import styles from "./NotePreview.module.css";

const NotePreview = ({ title, date, tags }) => {
  const formatTitle = (text) =>
    text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  return (
    <div className={styles.notePreviewContainer}>
      <h3>{formatTitle(title)}</h3>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span className={styles.tag}>{tag}</span>
        ))}
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default NotePreview;
