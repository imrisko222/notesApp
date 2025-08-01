import React from "react";
// components
import Header from "../components/Header/Header";
import Navigation from "../components/Sidebar/Navigation";
import NoteListPanel from "../components/Sidebar/NoteListPanel";
// styles
import styles from "./NotesPage.module.css";

const NotesPage = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.columnA}>
        <Navigation />
      </aside>
      <header className={styles.header}>
        <Header />
      </header>
      <section className={`${styles.coulmnB} ${styles.allListContainer}`}>
        <NoteListPanel />
      </section>
      <main className={styles.columnC}>
        <h3>nieco</h3>
      </main>
      <div>
        <h3>daco</h3>
      </div>
    </div>
  );
};

export default NotesPage;
