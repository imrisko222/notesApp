import React from "react";
import EditorPanelFooter from "./EditorPanelFooter";
import styles from "./EditorPanel.module.css";
const EditorPanel = () => {
  return (
    <div className={styles.editorPanelContainer}>
      <h3>Tu bude nejaky title</h3>
      <EditorPanelFooter />
    </div>
  );
};

export default EditorPanel;
