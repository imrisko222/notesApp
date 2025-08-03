import React from "react";
import NotePreview from "./NotePreview";

const notesList = [
  {
    id: "1",
    tags: ["react", "dev"],
    title: "Learn nEw Concepts",
    date: "17 Oct 2024",
    isActive: true,
  },
  {
    id: "2",
    tags: ["learn", "language"],
    title: "Learn Italian",
    date: "15 Oct 2024",
    isActive: true,
  },
  {
    id: "3",
    tags: ["books", "study"],
    title: "Study Books",
    date: "13 Oct 2024",
    isActive: true,
  },
  {
    id: "4",
    tags: ["books", "study"],
    title: "Study Books",
    date: "13 Oct 2024",
    isActive: true,
  },
];

const NoteList = () => {
  return (
    <div>
      {notesList.map((note) => (
        <NotePreview key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
