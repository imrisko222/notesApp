import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img src={logo} alt="logo of project" className={styles.logo} />;
};

export default Logo;
