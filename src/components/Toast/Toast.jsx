import React from "react";
import CheckCircleIcon from "../icons/check-circle.svg?react";
import CloseRemoveIcon from "../icons/close-remove.svg?react";
import styles from "./Toast.module.css";

const Toast = ({ message, actionLabel }) => {
  return (
    <div className={styles.toastContainer}>
      <section className={styles.messageSection}>
        <span>
          <CheckCircleIcon />
        </span>
        <p>{message}</p>
      </section>
      <section className={styles.actionSection}>
        {actionLabel && <a href="">{actionLabel}</a>}
        <button className={styles.iconButton}>
          <CloseRemoveIcon />
        </button>
      </section>
    </div>
  );
};

export default Toast;
