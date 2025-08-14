import React from "react";
// components
import Button from "../Buttons/Button";
// icons
import SunIcon from "../icons/sun.svg?react";
import FontIcon from "../icons/type.svg?react";
import LockIcon from "../icons/lock.svg?react";
import LogoutIcon from "../icons/logout.svg?react";
import EndIcon from "../icons/chevron-right-md.svg?react";

import styles from "./Settings.module.css";
const SettingsMenu = () => {
  return (
    <div className={styles.menuWrapper}>
      <Button
        variant="navigation"
        icon={<SunIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
      >
        Color Theme
      </Button>
      <Button
        variant="navigation"
        icon={<FontIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
      >
        Font Theme
      </Button>
      <Button
        variant="navigation"
        icon={<LockIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
      >
        Change Password
      </Button>
      <div className={styles.divider}></div>
      <Button
        variant="navigation"
        icon={<LogoutIcon />}
        endIcon={<EndIcon />}
        align="left"
        textSize="textPreset4"
      >
        Logout
      </Button>
    </div>
  );
};

export default SettingsMenu;
