import React from "react";
import Input from "../Input/Input";
import SettingsIcon from "../icons/setting.svg?react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h3>All Notes</h3>
      <Input
        type="text"
        placeholderText="Search by title, content, or tags... "
      />
      <SettingsIcon />
    </div>
  );
};

export default Header;
