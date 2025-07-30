import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Buttons/Button";
import HomeIcon from "../icons/home.svg?react";
import ArchiveIcon from "../icons/archive.svg?react";
import ArrowRigth from "../icons/chevron-right-md.svg?react";
import TagIcon from "../icons/tag.svg?react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeButton, setActiveButton] = useState("all");

  const handleMouseEnter = (id) => {
    setHoveredButton(id);
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className={styles.navigationContainer}>
      <section className={styles.logo}>
        <Logo />
      </section>
      <section className={styles.mainNav}>
        <Button
          icon={<HomeIcon />}
          endIcon={<ArrowRigth />}
          textSize="textPreset4"
          variant="navigation"
          align="left"
          isActive={activeButton === "all" || hoveredButton === "all"}
          onMouseEnter={() => handleMouseEnter("all")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("all")}
        >
          All Notes
        </Button>
        <Button
          icon={<ArchiveIcon />}
          endIcon={<ArrowRigth />}
          textSize="textPreset4"
          variant="navigation"
          isActive={activeButton === "archived" || hoveredButton === "archived"}
          onMouseEnter={() => handleMouseEnter("archived")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("archived")}
        >
          Archived Notes
        </Button>
      </section>
      <div className={styles.devider}></div>
      <section className={styles.tagNav}>
        <h3>Tags</h3>
        <Button
          variant="navigation"
          icon={<TagIcon />}
          textSize="textPreset4"
          align="left"
        >
          nieco
        </Button>
        <Button
          variant="navigation"
          icon={<TagIcon />}
          textSize="textPreset4"
          align="left"
        >
          nieco dalsie
        </Button>
      </section>
    </div>
  );
};

export default Navigation;
