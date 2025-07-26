import React from "react";
import styles from "./Buttons.module.css";
const Button = ({
  variant = "primary",
  icon,
  endIcon,
  children,
  cancelLabel,
  confirmLabel,
  textSize = "textPreset3",
}) => {
  const textSizeClass = {
    textPreset1: styles.preset1,
    textPreset2: styles.preset2,
    textPreset3: styles.preset3,
    textPreset4: styles.preset4,
    textPreset5: styles.preset5,
    textPreset6: styles.preset6,
  }[textSize];
  return (
    <button className={`${styles[variant]} ${textSizeClass}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {endIcon && <span className={styles.icon}>{endIcon}</span>}
    </button>
  );
};

export default Button;
