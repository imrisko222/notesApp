import React from "react";
import styles from "./Input.module.css";

const Input = ({
  startIcon,
  endIcon,
  placeholderText,
  nameLabel,
  inputId,
  type,
}) => {
  return (
    <main className={styles.componentContainer}>
      <div className={styles.inputHeader}>
        <label htmlFor={inputId} className={styles.inputLabel}>
          {nameLabel}
        </label>
        {type === "password" && (
          <a className={styles.forgotPasswordLink}>Forgotten password?</a>
        )}
      </div>
      <div className={styles.inputContainer}>
        {startIcon && (
          <span className={styles.iconWrapper}>
            {React.cloneElement(startIcon, {
              className: `${startIcon.props.className || ""} ${styles.icon}`,
            })}
          </span>
        )}
        <input id={inputId} type={type} placeholder={placeholderText} />
        {endIcon && (
          <span className={styles.iconWrapper}>
            {React.cloneElement(endIcon, {
              className: `${endIcon.props.className || ""} ${styles.icon}`,
            })}
          </span>
        )}
      </div>
    </main>
  );
};

export default Input;
