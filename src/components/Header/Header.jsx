import React from "react";
import Input from "../Input/Input";
import SettingsIcon from "../icons/setting.svg?react";
import SearchIcon from "../icons/search.svg?react";
import styles from "./Header.module.css";

const Header = ({ onClick }) => {
  return (
    <div className={styles.headerContainer}>
      <h3>All Notes</h3>
      <div className={styles.rightSection}>
        <Input
          type="text"
          placeholderText="Search by title, content, or tags... "
          startIcon={<SearchIcon />}
        />
        <SettingsIcon onClick={onClick} className={styles.settingsIcon} />
      </div>
    </div>
  );
};

export default Header;
