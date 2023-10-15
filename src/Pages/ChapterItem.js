import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "../styles.module.scss";
import { FiCheck } from "react-icons/fi";

function ChapterItem({ chapter, markChapterAsCompleted }) {
  const [isChapterCompleted, setIsChapterCompleted] = useState(false);

  const handleMarkAsCompleted = () => {
    markChapterAsCompleted(chapter);
    setIsChapterCompleted(true);
  };

  return (
    <>
      <li
        className={
          isChapterCompleted ? styles.completedChapter : styles.chapter
        }
      >
        {chapter}
        {isChapterCompleted ? (
          <Link to="/take-test" className={styles.buttonTakeTest}>
            Take Test
          </Link>
        ) : (
          <button
            className={styles.buttonCompleted}
            onClick={handleMarkAsCompleted}
          >
            <FiCheck />
          </button>
        )}
      </li>
    </>
  );
}

export default ChapterItem;
