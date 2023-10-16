import React, { useEffect, useState } from "react";
import styles from "./TakeTest.module.scss";
import { useLocation } from "react-router-dom";

import subjectsData from "./subjectsData";

function TakeTest() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const chapter = searchParams.get("chapter");
  const subject = searchParams.get("subject");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [driveLink, setDriveLink] = useState(null);

  useEffect(() => {
    if (chapter === "Chapter 3: Mathematics of Chance") {
      setSelectedSubject(3);
      setSelectedChapter("three");
    } else if (chapter === "Chapter 2: Circles") {
      setSelectedSubject(2);
      setSelectedChapter("two");
    } else if (chapter === "Chapter 1: Arithmetic Sequences") {
      setSelectedSubject(1);
      setSelectedChapter("one");
    }
  }, [chapter]);

  useEffect(() => {
    if (selectedChapter !== null && selectedSubject !== null) {
      const selectedSubjectData = subjectsData[selectedSubject];
      if (selectedSubjectData && selectedSubjectData[selectedChapter]) {
        const driveLink = selectedSubjectData[selectedChapter];
        setDriveLink(driveLink);
      }
    }
  }, [selectedChapter, selectedSubject]);
  const openExternalURL = () => {
    if (driveLink) {
      window.open(driveLink, "_blank");
    }
  };
  return (
    <div className={styles.takeTestPage}>
      <h1>Take the Test</h1>
      <h4>{chapter}</h4>
      <button className={styles.questionPaper} onClick={openExternalURL}>
        Here is the Question Paper
      </button>

      {/* Add content for the test here */}
    </div>
  );
}

export default TakeTest;
