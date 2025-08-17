import React, { useState } from "react";
// components
import Button from "../Buttons/Button";
// icons
import SunIcon from "../icons/sun.svg?react";
import FontIcon from "../icons/type.svg?react";
import LockIcon from "../icons/lock.svg?react";
import LogoutIcon from "../icons/logout.svg?react";
import EndIcon from "../icons/chevron-right-md.svg?react";

import styles from "./Settings.module.css";
const SettingsMenu = ({ onClick }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.menuWrapper}>
      <Button
        variant="menu"
        icon={<SunIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
        isActive={activeIndex === 1}
        onClick={() => handleActiveIndex(1)}
      >
        Color Theme
      </Button>
      <Button
        variant="menu"
        icon={<FontIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
        isActive={activeIndex === 2}
        onClick={() => handleActiveIndex(2)}
      >
        Font Theme
      </Button>
      <Button
        variant="menu"
        icon={<LockIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
        isActive={activeIndex === 3}
        onClick={() => handleActiveIndex(3)}
      >
        Change Password
      </Button>
      <div className={styles.divider}></div>
      <Button
        variant="menu"
        icon={<LogoutIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
        onClick={onClick}
      >
        Logout
      </Button>
    </div>
  );
};

export default SettingsMenu;
