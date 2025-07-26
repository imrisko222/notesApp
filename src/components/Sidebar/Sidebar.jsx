import React from "react";
import Button from "../Buttons/Button";
import PlusIcon from "../icons/plus.svg?react";
import NoteList from "./NoteList";
import Navigation from "./Navigation";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <section className={styles.navigationContainer}>
        <Navigation />
      </section>
      <section className={styles.allListContainer}>
        <Button icon={<PlusIcon />}>Create New Note</Button>
        <NoteList />
      </section>
    </div>
  );
};

export default Sidebar;
