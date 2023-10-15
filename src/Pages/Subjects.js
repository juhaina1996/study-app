import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles.module.scss";

function Subjects({ subjects, selectedSubject, setSelectedSubject }) {
  return (
    <div className="sidebar">
      <ul className={styles.navBar}>
        {subjects.map((subject) => (
          <li
            key={subject.id}
            className={
              selectedSubject === subject.id
                ? styles.selectedItem
                : styles.subjectList
            }
          >
            <Link
              to={`/subjects/${subject.id}`}
              onClick={() => {
                setSelectedSubject(subject.id);
              }}
            >
              {subject.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;
