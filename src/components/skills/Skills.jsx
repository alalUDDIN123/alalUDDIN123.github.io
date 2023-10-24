

import React, { useState } from 'react';
import styles from "../../assests/styles/skills.module.css";



const Skills = () => {
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

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterSkills = (category) => {
    setSelectedCategory(category);
  };

  const calculateBackgroundColor = (index) => {
    const colors = ["#33ed11", "#186F65", "rgb(52, 152, 219)"];
    return colors[index % 3]; // Cyclically select one of the three colors
  };
  return (
    <div className={styles.skillsContainer} id='skills'>
      <div className={styles.skillsHeadingWrapper}>
        <h2 className={styles.skillsHeading}>Skills</h2>
      </div>


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

      <div className={styles.skillsData}>
        {skillsData
          .filter(skill => selectedCategory === "All" || skill.category === selectedCategory)
          .map((skill, index) => (
            <div className={styles.skill} key={index}>
              <div className={styles.skillInfo}>
                <p>{skill.name}</p>
                <p>{skill.percent}</p>
              </div>
              <div
                className={styles.skillInfoProgressLine}
                style={{
                  width: `calc(${skill.percent})`,
                  backgroundColor: calculateBackgroundColor(index),
                  animation: `fillProgress-${index} ${parseFloat(skill.percent) * 0.040}s linear infinite`,
                }}
              >
                <style>
                  {`
            @keyframes fillProgress-${index} {
              0% {
                width: 0;
              }
              100% {
                width: ${skill.percent};
              }
            }
          `}
                </style>
              </div>
            </div>
          ))}



      </div>
    </div>
  );
};

export default Skills;
