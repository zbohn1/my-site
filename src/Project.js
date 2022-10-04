import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";

function Project(props) {
  const [projectTitle, setProjectTitle] = React.useState("");
  return (
    <Wrapper
      style={
        props.active == props.value || props.active == "All"
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <ImageLink to={props.to}>
        <ProjectImage
          src={props.src}
          onMouseOver={() => setProjectTitle(props.title)}
          onMouseOut={() => setProjectTitle("")}
        />
        <Title
          onMouseOver={() => setProjectTitle(props.title)}
          color={props.color}
        >
          {projectTitle}
        </Title>
      </ImageLink>
    </Wrapper>
  );
}
export default Project;

const ProjectImage = styled.img`
  height: 100%;
  width: 100%;
  max-height: 500px;
  display: block;
  vertical-align: bottom;
  &:hover {
    opacity: 0.7;
  }
`;

const Wrapper = styled.div`
  flex-basis: 49%;
  position: relative;
  &:hover {
    opacity: 0.625;
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`;

const Title = styled.h2`
  position: absolute;
  width: fit-content;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 0.5;
  font-size: 40px;
  color: ${(props) => props.color};
  font-family: "Regular";

  @media (max-width: 900px) {
    font-size: 32px;
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

const ImageLink = styled(Link)`
  flex-basis: 50%;
  height: 100%;
  width: 100%;
  max-height: 500px;
  display: block;
  vertical-align: bottom;
`;
