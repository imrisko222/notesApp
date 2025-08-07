import React from "react";
// components
import EditorPanelHeader from "./EditorPanelHeader";
import EditorPanelBody from "./EditorPanelBody";
import EditorPanelFooter from "./EditorPanelFooter";
// styles
import styles from "./EditorPanel.module.css";
const EditorPanel = () => {
  return (
    <div className={styles.editorPanelContainer}>
      <h3>Tu bude nejaky title</h3>
      <EditorPanelHeader />
      <div className={styles.divider}></div>
      <EditorPanelBody />
      <div className={styles.divider}></div>
      <EditorPanelFooter />
    </div>
  );
};

export default EditorPanel;
