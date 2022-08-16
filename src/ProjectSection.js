import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import Project from "./Project.js";
import { Link } from "react-router-dom";

function ProjectSection() {
  return (
    <Wrapper>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ImgSectionWrapper>
        <ImgWrapper>
          <ImageLink to="/parakeet">
            <Project src={require("./ParakeetIcon.png")} title="PARAKEET" />
          </ImageLink>
          <ImageLink to="/todo">
            <Project src={require("./ToDoImg2.png")} title="TO DO" />
          </ImageLink>
        </ImgWrapper>
        <ImgWrapper>
          <ImageLink to="/helena">
            <Project src={require("./Helena.png")} title="HELENA" />
          </ImageLink>
          <ImageLink to="/zs">
            <Project src={require("./ZS.png")} title="ZS" />
          </ImageLink>
        </ImgWrapper>
      </ImgSectionWrapper>
    </Wrapper>
  );
}

const ProjectsTitle = styled.h5`
  font-size: 37px;
  margin: 0 0 47px 0px;
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  margin: 0 57px;
  @media (max-width: 300px) {
    margin: 0;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const ImgSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageLink = styled(Link)`
  height: 100%;
  width: 100%;
  max-height: 500px;
  display: block;
  vertical-align: bottom;
`;

export default ProjectSection;
