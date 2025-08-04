import React from "react";
import Button from "../Buttons/Button";
import styles from "./EditorPanelFooter.module.css";
const EditorPanelFooter = () => {
  return (
    <footer className={styles.footerContainer}>
      <Button align="left" fontSize="textPreset4" variant="primary">
        Save Note
      </Button>
      <Button align="center" fontSize="textPreset4" variant="secondary">
        Cancel
      </Button>
    </footer>
  );
};

export default EditorPanelFooter;
