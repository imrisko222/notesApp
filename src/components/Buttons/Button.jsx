import React from "react";
import clsx from "clsx";
import styles from "./Buttons.module.css";
const Button = ({
  variant = "primary",
  icon,
  endIcon,
  children,
  cancelLabel,
  confirmLabel,
  textSize = "textPreset3",
  align = 'center',
  isActive = true
}) => {
  const classNames = clsx (
    styles[variant],
    styles[align],
    textSize && styles[textSize]
  );
  const contentClass = clsx(
    styles.content,
    !isActive && styles.noEndIcon
  )

  return (
    <button className={classNames}>
      <div className={contentClass}>

      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {isActive && endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </div>
    </button>
  );
};

export default Button;
