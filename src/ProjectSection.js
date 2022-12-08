import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import Project from "./Project.js";
import { Link } from "react-router-dom";
import SortButton from "./SortButton.js";

function ProjectSection() {
  const [active, setActive] = React.useState("All");

  function onClick(parameter) {
    let value = parameter;
    setActive(value);
  }

  return (
    <Wrapper>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ButtonFlex>
        <SortButton
          value="All"
          onClick={onClick}
          color={active == "All" ? "white" : "#afb4b4"}
          backgroundColor={active == "All" ? "#099598" : "#f5f5f5"}
          border={active == "All" ? "1px solid #099598" : "1px solid #afb4b4"}
          opacity={active == "All" ? "1" : "1"}
        >
          All
        </SortButton>
        <SortButton
          value="Web Dev"
          onClick={onClick}
          color={active == "Web Dev" ? "white" : "#afb4b4"}
          backgroundColor={active == "Web Dev" ? "#099598" : "#f5f5f5"}
          border={
            active == "Web Dev" ? "1px solid #099598" : "1px solid #afb4b4"
          }
          opacity={active == "Web Dev" ? "1" : "1"}
        >
          Web Dev / UX
        </SortButton>
        <SortButton
          value="Creative Tech"
          onClick={onClick}
          color={active == "Creative Tech" ? "white" : "#afb4b4"}
          backgroundColor={active == "Creative Tech" ? "#099598" : "#f5f5f5"}
          border={
            active == "Creative Tech"
              ? "1px solid #099598"
              : "1px solid #afb4b4"
          }
          opacity={active == "Creative Tech" ? "1" : "1"}
        >
          Creative Tech
        </SortButton>
        <SortButton
          value="Business"
          onClick={onClick}
          color={active == "Business" ? "white" : "#afb4b4"}
          backgroundColor={active == "Business" ? "#099598" : "#f5f5f5"}
          border={
            active == "Business" ? "1px solid #099598" : "1px solid #afb4b4"
          }
          opacity={active == "Business" ? "1" : "1"}
        >
          Business
        </SortButton>
      </ButtonFlex>
      <ImgSectionWrapper>
        <Project
          src={require("./productfeedbackappimage.png")}
          title="FEEDBACK"
          to="/productfeedback"
          active={active}
          value="Web Dev"
          color="grey"
        />
        <Project
          src={require("./ParakeetIcon.png")}
          title="PARAKEET"
          to="/parakeet"
          active={active}
          value="Web Dev"
          color="grey"
        />
        <Project
          src={require("./JewishStar.jpg")}
          title="ANTI-SEMITISM"
          to="/ASMain"
          active={active}
          value="Web Dev"
          color="white"
        />
        <Project
          src={require("./visualizer.png")}
          title="AUDIO VISUALIZER"
          to="/audiovisualizer"
          active={active}
          value="Creative Tech"
          color="white"
        />
        <Project
          src={require("./tornado.png")}
          title="TORNADO"
          to="/tornado"
          active={active}
          value="Creative Tech"
          color="white"
        />
        <Project
          src={require("./Helena.png")}
          title="HELENA"
          to="/helena"
          active={active}
          value="Business"
          color="grey"
        />
        <Project
          src={require("./ToDoImg2.png")}
          title="TO DO"
          to="/todo"
          active={active}
          value="Web Dev"
          color="grey"
        />
        <Project
          src={require("./ZS.png")}
          title="ZS"
          to="/zs"
          active={active}
          value="Business"
          color="grey"
        />
        <Project
          src={require("./icicles.png")}
          title="ICICLES"
          to="/icicles"
          active={active}
          value="Creative Tech"
          color="white"
        />
        <Project
          src={require("./clock.png")}
          title="RAINBOW CLOCK"
          to="/clock"
          active={active}
          value="Creative Tech"
          color="grey"
        />
      </ImgSectionWrapper>
    </Wrapper>
  );
}

const ProjectsTitle = styled.h5`
  font-size: 37px;
  margin: 0 0 10px 0px;
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  margin: 0 57px;
  @media (max-width: 700px) {
    margin: 10px;
  }
`;

const ImgSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 10px;
  margin-bottom: 47px;
`;

export default ProjectSection;
