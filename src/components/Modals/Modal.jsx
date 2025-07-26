import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import styles from "./Modal.module.css";
const Modal = ({
  title,
  body,
  cancelLabel,
  confirmLabel,
  icon,
  buttonVariant,
}) => {
  return (
    <div className={styles.mainContainer}>
      <ModalHeader title={title} body={body} icon={icon} />
      <div className={styles.divider}></div>
      <ModalFooter
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        buttonVariant={buttonVariant}
      />
    </div>
  );
};

export default Modal;
