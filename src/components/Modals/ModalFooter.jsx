import React from "react";
import Button from "../Buttons/Button";
import styles from "./Modal.module.css";

const ModalFooter = ({ cancelLabel, confirmLabel, buttonVariant }) => {
  return (
    <div className={styles.buttonContainer}>
      <Button variant="secondary">{cancelLabel}</Button>
      <Button variant={buttonVariant}>{confirmLabel}</Button>
    </div>
  );
};

export default ModalFooter;
