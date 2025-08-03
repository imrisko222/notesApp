import React from "react";
// components
import Header from "../components/Header/Header";
import Navigation from "../components/Sidebar/Navigation";
import NoteListPanel from "../components/Sidebar/NoteListPanel";
import NoteActions from "../components/NoteActions/NoteActions";
import EditorPanel from "../components/EditorPanel/EditorPanel";
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
      <EditorPanel />
      </main>
      <div className={styles.columnD}>
        <NoteActions />
      </div>
    </div>
  );
};

export default NotesPage;
