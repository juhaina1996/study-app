import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles.module.scss";
import { FiCheck } from "react-icons/fi";

function ChapterItem({ selectedSubject, chapter, markChapterAsCompleted }) {
  console.log("selectedSubject", selectedSubject);
  console.log("chapter", chapter);
  // Use local storage to initialize the completed status
  const initialCompletedStatus =
    localStorage.getItem(`completed_${chapter}`) === "true";
  const [isChapterCompleted, setIsChapterCompleted] = useState(
    initialCompletedStatus
  );

  const handleMarkAsCompleted = () => {
    markChapterAsCompleted(chapter);
    setIsChapterCompleted(true);

    // Save the completed status to local storage
    localStorage.setItem(`completed_${chapter}`, "true");
  };

  const handleReset = () => {
    // Reset the completed status and remove it from local storage
    markChapterAsCompleted(chapter);
    setIsChapterCompleted(false);
    localStorage.removeItem(`completed_${chapter}`);
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
          <>
            <Link
              to={{
                pathname: "/take-test",
                search: `?chapter=${chapter}&subject=${selectedSubject}`,
              }}
              className={styles.buttonTakeTest}
            >
              Take Test
            </Link>
            <button className={styles.buttonReset} onClick={handleReset}>
              Clear
            </button>
          </>
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
