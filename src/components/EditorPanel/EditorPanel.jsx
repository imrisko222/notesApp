import React from "react";
import EditorPanelHeader from "./EditorPanelHeader";
import EditorPanelFooter from "./EditorPanelFooter";
import styles from "./EditorPanel.module.css";
const EditorPanel = () => {
  return (
    <div className={styles.editorPanelContainer}>
      <h3>Tu bude nejaky title</h3>
      <EditorPanelHeader />
      <div className={styles.divider}></div>
      <p>vselicomozne</p>
      <div className={styles.divider}></div>
      <EditorPanelFooter />
    </div>
  );
};

export default EditorPanel;
