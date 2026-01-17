

import React, { useState } from 'react';
import styles from "../../assests/styles/skills.module.css";

/**
 * Skills Component
 * Displays all skills with filtering by category and color-coded progress bars
 */
const Skills = () => {
  // Array of all skills with their proficiency level and category
  const skillsData = [
    {
      name: "HTML",
      percent: "90%",
      category: "Programming",
    },
    {
      name: "CSS",
      percent: "85%",
      category: "Programming",
    },
    {
      name: "JavaScript",
      percent: "80%",
      category: "Programming",
    },
    {
      name: "Bootstrap",
      percent: "70%",
      category: "Programming"
    },


    {
      name: "React",
      percent: "75%",
      category: "Programming"
    },
    {
      name: "Redux",
      percent: "85%",
      category: "Programming"
    },
    {
      name: "Next.js",
      percent: "70%",
      category: "Programming"
    },
    {
      name: "Angular.js",
      percent: "75%",
      category: "Programming"
    },
    {
      name: "Node.js",
      percent: "80%",
      category: "Programming"
    },
    {
      name: "Node.js",
      percent: "80%",
      category: "Programming"
    },
    {
      name: "Express.js",
      percent: "80%",
      category: "Programming"
    },
    {
      name: "MongoDb.js",
      percent: "90%",
      category: "Programming"
    },
    {
      name: "Collaborative",
      percent: "95%",
      category: "Soft Skills"
    },
    {
      name: "Creative Thinking",
      percent: "90%",
      category: "Soft Skills"
    },
    {
      name: "Time Management",
      percent: "85%",
      category: "Soft Skills"
    },
    {
      name: "VS Code",
      percent: "95%",
      category: "Tools"
    },
    {
      name: "Postman",
      percent: "90%",
      category: "Tools"
    },
    {
      name: "GitHub",
      percent: "85%",
      category: "Tools"
    },
  ];

  // State to track which category filter is selected (default: "All")
  const [selectedCategory, setSelectedCategory] = useState("All");

  /**
   * Updates the selected category when user clicks a filter button
   * @param {string} category - The category to filter by
   */
  const filterSkills = (category) => {
    setSelectedCategory(category);
  };

  /**
   * Returns a color based on skill index using modulo cycling
   * Ensures colors repeat in pattern: Green → Teal → Blue → Green...
   * 
   * Example: 
   *   - index 0: 0 % 3 = 0 → Green (#33ed11)
   *   - index 1: 1 % 3 = 1 → Teal (#186F65)
   *   - index 2: 2 % 3 = 2 → Blue (rgb(52, 152, 219))
   *   - index 3: 3 % 3 = 0 → Green (#33ed11) [pattern repeats]
   */
  const calculateBackgroundColor = (index) => {
    const colors = ["#33ed11", "#186F65", "rgb(52, 152, 219)"];
    return colors[index % 3]; // Cyclically select one of the three colors
  };
  return (
    <div className={styles.skillsContainer} id='skills'>
      {/* Skills Section Heading */}
      <div className={styles.skillsHeadingWrapper}>
        <h2 className={styles.skillsHeading}>Skills</h2>
      </div>

      {/* Filter Buttons - User can click to filter skills by category */}
      <div className={styles.skillsFilterBar}>
        <button
          className={selectedCategory === "All" ? styles.activeFilter : ""}
          onClick={() => filterSkills("All")}
        >
          All
        </button>
        <button
          className={selectedCategory === "Programming" ? styles.activeFilter : ""}
          onClick={() => filterSkills("Programming")}
        >
          Programming
        </button>
        <button
          className={selectedCategory === "Soft Skills" ? styles.activeFilter : ""}
          onClick={() => filterSkills("Soft Skills")}
        >
          Soft
        </button>
        <button
          className={selectedCategory === "Tools" ? styles.activeFilter : ""}
          onClick={() => filterSkills("Tools")}
        >
          Tools
        </button>
      </div>

      {/* Skills Display Section */}
      <div className={styles.skillsData}>
        {/* 
          .filter() - Show only skills matching selected category
          .map() - Loop through filtered skills and create UI elements for each
        */}
        {skillsData
          .filter(skill => selectedCategory === "All" || skill.category === selectedCategory)
          .map((skill, index) => (
            <div className={styles.skill} key={index}>
              {/* Skill Name and Proficiency Percentage */}
              <div className={styles.skillInfo}>
                <p>{skill.name}</p>
                <p>{skill.percent}</p>
              </div>
              
              {/* Progress Bar - Width and Color based on skill data and index */}
              <div
                className={styles.skillInfoProgressLine}
                style={{
                  width: `calc(${skill.percent})`,
                  backgroundColor: calculateBackgroundColor(index), // Color cycles: Green → Teal → Blue

                }}
              >

              </div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default Skills;
