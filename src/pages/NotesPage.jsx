import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Sidebar/Navigation";
import styles from "./NotesPage.module.css";

const NotesPage = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <Header />
    </div>
  );
};

export default NotesPage;
