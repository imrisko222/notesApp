import React from "react";
import SettingsMenu from "./SettingsMenu";
import styles from "./Settings.module.css";
const SettingsWrapper = () => {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.itemA}>
        <SettingsMenu />
      </div>
      <div className={styles.itemB}>
        <h1>daco</h1>
      </div>
    </div>
  );
};

export default SettingsWrapper;
