import React, { useState } from "react";
// components
import Header from "../components/Header/Header";
import Navigation from "../components/Sidebar/Navigation";
import NotesWorkspace from "../components/NotesWorkspace/NotesWorkspace";
import SettingsWrapper from "../components/SettingsComponent/SettingsWrapper";
import Login from "../components/Login/Login";
// styles
import styles from "./NotesPage.module.css";

const NotesPage = ({ onClick }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Navigation />
      </aside>
      <header className={styles.header}>
        <Header onClick={openSettings} />
      </header>
      {isSettingsOpen ? (
        <SettingsWrapper onClick={onClick} />
      ) : (
        <NotesWorkspace />
      )}
      {/* <SettingsWrapper /> */}
      {/* <section className={styles.content}>
        <NotesWorkspace />
      </section> */}
    </div>
  );
};

export default NotesPage;
