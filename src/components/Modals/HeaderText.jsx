import React from "react";
import styles from "./Modal.module.css";
const HeaderText = ({ title, body }) => {
  return (
    <div className={styles.textWrapper}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default HeaderText;
