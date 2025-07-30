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
  align = "center",
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  console.log("isActive:", isActive, "endIcon:", endIcon);

  const classNames = clsx(
    styles[variant],
    styles[align],
    textSize && styles[textSize],
    isActive && styles.active
  );

  const contentClass = clsx(styles.content, !isActive && styles.noEndIcon);

  return (
    <button
      className={classNames}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className={contentClass}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.name}>{children}</span>

        <span
          className={styles.endIcon}
          style={{ visibility: isActive && endIcon ? "visible" : "hidden" }}
        >
          {endIcon}
        </span>
      </div>
    </button>
  );
};

export default Button;
