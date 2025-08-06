import React from "react";
import clsx from "clsx";
import styles from "./Buttons.module.css";
const Button = ({
  variant = "primary",
  icon,
  endIcon,
  children,
  textSize = "textPreset3",
  // align,
  align = "center",
  width,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  console.log(align);

  const classNames = clsx(
    styles[variant],
    styles[width],
    textSize && styles[textSize],
    isActive && styles.active
  );

  const contentClass = clsx(
    styles.content,
    styles[align],
    !isActive && styles.noEndIcon
  );

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
          style={{ display: isActive && endIcon ? "block" : "none" }}
        >
          {endIcon}
        </span>
      </div>
    </button>
  );
};

export default Button;
