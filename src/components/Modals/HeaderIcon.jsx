import React from "react";
import styles from "./Modal.module.css";

const HeaderIcon = ({ icon }) => {
  return (
    <div className={styles.iconWrapper}>
      <img src={icon} alt="icon" className={styles.img} />
    </div>
  );
};

export default HeaderIcon;
