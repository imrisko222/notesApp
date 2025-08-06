import React from "react";
import NotePropertyRow from "./NotePropertyRow";
import TagIcon from "../icons/tag.svg?react";
import LoadingIcon from "../icons/loading.svg?react";
import ClockIcon from "../icons/circle-clock.svg?react";

import styles from "./EditorPanel.module.css";
const EditorPanelHeader = () => {
  return (
    <div className={styles.header}>
      <NotePropertyRow
        icon={<TagIcon />}
        label="Tags"
        value={`${"Tag1"}, ${"Tag2"}`}
      />
      <NotePropertyRow icon={<LoadingIcon />} label="Status" value="active" />
      <NotePropertyRow
        icon={<ClockIcon />}
        label="Last edited"
        value={"24 Oct 2024"}
      />
    </div>
  );
};

export default EditorPanelHeader;
