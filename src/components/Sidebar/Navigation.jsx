import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Buttons/Button";
import HomeIcon from "../icons/home.svg?react";
import ArchiveIcon from "../icons/archive.svg?react";
import ArrowRigth from "../icons/chevron-right-md.svg?react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <section>
        <Logo />
      </section>
      <section>
        <Button icon={<HomeIcon />} endIcon={<ArrowRigth />}>
          All Notes
        </Button>
        <Button icon={<ArchiveIcon />} endIcon={<ArrowRigth />}>
          Archived Notes
        </Button>
      </section>
    </div>
  );
};

export default Navigation;
