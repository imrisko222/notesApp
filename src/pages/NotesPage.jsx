import React from "react";
// components
import Header from "../components/Header/Header";
import Navigation from "../components/Sidebar/Navigation";
import NotesWorkspace from "../components/NotesWorkspace/NotesWorkspace";
import SettingsWrapper from "../components/SettingsComponent/SettingsWrapper";
// styles
import styles from "./NotesPage.module.css";

const NotesPage = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Navigation />
      </aside>
      <header className={styles.header}>
        <Header />
      </header>
      <SettingsWrapper />
      {/* <section className={styles.content}>
        <NotesWorkspace />
      </section> */}
    </div>
  );
};

export default NotesPage;
