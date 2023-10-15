import React from "react";
import styles from "../styles.module.scss";
import ChapterItem from "./ChapterItem";

function Chapters({
  selectedSubject,
  chapters,
  markChapterAsCompleted,
  isChapterCompleted,
}) {
  return (
    <ul>
      {chapters.map((chapter, index) => (
        <ChapterItem
          key={index}
          chapter={chapter}
          selectedSubject={selectedSubject}
          markChapterAsCompleted={markChapterAsCompleted}
          isChapterCompleted={isChapterCompleted}
        />
      ))}
    </ul>
  );
}

export default Chapters;
