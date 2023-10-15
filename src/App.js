import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Chapters from "../src/Pages/Chapters";
import TakeTest from "./Pages/TakeTest/TakeTest";
import { FiMenu } from "react-icons/fi";

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [completedChapters, setCompletedChapters] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Calculate the remaining time until March 9, 2023 (in milliseconds)
  function calculateTimeRemaining() {
    const targetDate = new Date("2023-12-31T23:59:59Z").getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
    return Math.max(timeRemaining, 0);
  }

  // Update the time remaining every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // Format the time remaining into days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Function to toggle the menu's open/closed state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Mathematics",
      chapters: [
        "Chapter 1: Arithmetic Sequences",
        "Chapter 2: Circles",
        "Chapter 3: Mathematics of Chance",
        "Chapter 4: Second Degree Equations",
        "Chapter 5: Trigonometry",
        "Chapter 6: Coordinates",
        "Chapter 7: Tangents",
        "Chapter 8: Solids",
        "Chapter 9: Geometry and Algebra",
        "Chapter 10: Polynomials",
        "Chapter 11: Statistics",
      ],
    },
    {
      id: 2,
      name: "Physics",
      chapters: [
        "Chapter 1: Wave Motion Effects of Electric Current",
        "Chapter 2: Electromagnetic Induction Power",
        "Chapter 3: Transmission and DistributionHeat Colours of",
        "Chapter 4: Light Electronics and Modern Technology",
        "Chapter 5: Energy Management",
      ],
    },
    {
      id: 3,
      name: "Chemistry",
      chapters: [
        "Chapter 1: Periodic Table and Electronic Configuration",
        "Chapter 2: Mole Concept Rate of Chemical Reactions and Chemical Equilibrium Reactivity Series and Electrochemistry",
        "Chapter 3: Production of Metals",
        "Chapter 4: Nomenclature of Organic Compounds",
        "Chapter 5: Chemical Reactions of Organic Compounds",
        "Chapter 6: Chemistry for Human Progress",
      ],
    },
    {
      id: 4,
      name: "Biology",
      chapters: [
        "Chapter 1: Window of Knowledge",
        "Chapter 2: Sensations and Responses",
        "Chapter 3: Knowledge Chemical Messages for Homeostasis",
        "Chapter 4: Unraveling Genetic Mysteries Genetics for Future",
        "Chapter 5: The Paths Traversed by Soldiers of Defense",
        "Chapter 6: Keeping disease away",
        "Chapter 7: Chemical changes and homeostasis",
      ],
    },
    {
      id: 5,
      name: "Social",
      chapters: [
        "Chapter 1: Revolutions that Influenced the World",
        "Chapter 2: World in the Twentieth Century",
        "Chapter 3: Public Administration",
        "Chapter 4: British Exploitation and Resistance",
        "Chapter 5: Culture and Nationalism",
        "Chapter 6: Struggle and Freedom",
        "Chapter 7: India after Independence",
        "Chapter 8: Kerala towards Modernity",
        "Chapter 9: The State and Political Science",
        "Chapter 10: Civic Consciousness",
        "Chapter 11: Sociology: What? Why?",
      ],
    },
    {
      id: 6,
      name: "Arabic",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
        "Chapter 11",
        "Chapter 12",
        "Chapter 13",
        "Chapter 14",
        "Chapter 15",
      ],
    },
    {
      id: 7,
      name: "Malayalam",
      chapters: [
        "Chapter 1: Lakshmana Santhwanam",
        "Chapter 2: Oro Viliyum Kathu",
        "Chapter 3: Pavangal",
        "Chapter 4: Vishwaroopam",
        "Chapter 5: Priyadarshanam",
        "Chapter 6: Katalttiratt",
        "Chapter 7: Pralobhanam",
        "Chapter 8: Yudhathinte Parinamam",
        "Chapter 9: Athmavinte Velipadukal. Unit 4: Vakkukal Sargathalagal",
        "Chapter 10: Akkarmashi",
        "Chapter 11: Nan Kathakaranaya Katha",
        "Chapter 12: Aswamedham",
        "Chapter 13: Urulakkilann Tinnunnavar",
        "Chapter 14: Michelangelo, Mappu",
      ],
    },
    {
      id: 8,
      name: "English",
      chapters: [
        "Chapter 1: Adventures in a Banyan Tree (Short Story)",
        "Chapter 2: The Snake and the Mirror (Short Story)",
        "Chapter 3: Lines Written in Early Spring (Poem)",
        "Chapter 4: Project Tiger (Memoir)",
        "Chapter 5: My Sister's Shoes (Screenplay)",
        "Chapter 6: Blowin' in the Wind (Song)",
        "Chapter 7: The Best Investment I Ever Made (Anecdote)",
        "Chapter 8: The Ballad of Father Gilligan (Poem)",
        "Chapter 9: The Danger of a Single Story (Speech)",
        "Chapter 10: The Scholarship Jacket (Short Story)",
        "Chapter 11: Poetry (Poem)",
        "Chapter 12: The Never Never Nest (One-Act Play)",
        "Chapter 13: Vanka (Short Story)",
        "Chapter 14: Mother to Son (Poem)",
        "Chapter 15: The Castaway (Short Story)",
      ],
    },
    {
      id: 9,
      name: "Hindi",
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
        "Chapter 11",
        "Chapter 12",
        "Chapter 13",
        "Chapter 14",
        "Chapter 15",
        "Chapter 16",
      ],
    },
    {
      id: 10,
      name: "IT",
      chapters: [
        "Chapter 1: The World of Designing",
        "Chapter 2: Publishing",
        "Chapter 3: Attractive Web Designing",
        "Chapter 4: Python Graphics",
        "Chapter 5: Networking",
        "Chapter 6: Map Reading",
        "Chapter 7: The Working of the Internet",
        "Chapter 8: Database - An Introduction",
        "Chapter 9: Moving Images",
        "Chapter 10: Operating Systems",
      ],
    },
  ]);

  const markChapterAsCompleted = (chapter) => {
    const updatedChapters = { ...completedChapters };
    updatedChapters[chapter] = true;
    setCompletedChapters(updatedChapters);
  };

  const isChapterCompleted = (chapter) => {
    return completedChapters[chapter] || false;
  };

  return (
    <Router>
      <div className={styles.App}>
        <div className={styles.menuButton} onClick={toggleMenu}>
          <FiMenu size={24} />
        </div>
        <div className={styles.timer}>
          <p className={styles.remainingDays}>Remaining Days:</p>
          <p className={styles.remainingDays}>
            {days}days {hours}hours {minutes}minutes {seconds}seconds
          </p>
        </div>
        <div className={styles.mainContent}>
          {menuOpen && (
            <div className={styles.sidebar}>
              <ul>
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
                        toggleMenu();
                      }}
                    >
                      {subject.name}
                    </Link>
                  </li>
                ))}
                <li className={styles.subjectList}>
                  <Link to="/take-test">Take Test</Link>
                </li>
              </ul>
            </div>
          )}
          <div className={styles.content}>
            <Routes>
              {subjects.map((subject) => (
                <Route
                  key={subject.id}
                  path={`/subjects/${subject.id}`}
                  element={
                    <Chapters
                      chapters={subject.chapters}
                      markChapterAsCompleted={markChapterAsCompleted}
                      isChapterCompleted={isChapterCompleted}
                      selectedSubject={selectedSubject}
                    />
                  }
                />
              ))}
              <Route path="/take-test" element={<TakeTest />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
