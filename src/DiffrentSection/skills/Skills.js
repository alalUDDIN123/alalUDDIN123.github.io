import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import "./skills.css";
import { skills_data, softSkill, toolsData } from "./SkillsData";

const Skills = () => {





  return (
    <div className="skills_container" id="skills">
      <div className="skill_heading">
        <h2 className="title">
          Skills
        </h2>
      </div>

      <div className="skills_btn">

        <button>Tech Stack </button>
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
          {skills_data?.map((elem) => (
            <Box key={elem.name}>
              <div className="skills_grid_box" style={{ boxShadow: elem.boxshadow, backgroundColor: elem.backgroundColor }}>
                <div className="skills_grid_box_img">
                  <img src={elem.skill_avator} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3>{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>

      {/* Soft */}

      <div className="toolsbtn">

        <button>Soft Skill </button>
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
          {softSkill?.map((elem) => (
            <Box key={elem.name}>
              <div className="skills_grid_box" style={{ boxShadow: elem.boxshadow, backgroundColor: elem.backgroundColor }}>
                <div className="skills_grid_box_img">
                  <img src={elem.skill_avator} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3>{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>

      {/* Tools */}
      <div className="toolsbtn">

        <button>Tools </button>
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
          {toolsData?.map((elem) => (
            <Box key={elem.name}>
              <div className="skills_grid_box" style={{ boxShadow: elem.boxshadow, backgroundColor: elem.backgroundColor }}>
                <div className="skills_grid_box_img">
                  <img src={elem.skill_avator} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3>{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>


    </div>
  );
};

export default Skills