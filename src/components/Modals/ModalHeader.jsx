import React from "react";
import HeaderText from "./HeaderText";
import HeaderIcon from "./HeaderIcon";
import styles from "./Modal.module.css";

const ModalHeader = ({ title, body, icon }) => {
  return (
    <div className={styles.headerContainer}>
      <HeaderIcon icon={icon} />
      <HeaderText title={title} body={body} />
    </div>
  );
};

export default ModalHeader;
