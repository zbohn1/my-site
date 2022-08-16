import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

function Project(props) {
  const [projectTitle, setProjectTitle] = React.useState("");
  return (
    <Wrapper>
      <ProjectImage
        src={props.src}
        onMouseOver={() => setProjectTitle(props.title)}
        onMouseOut={() => setProjectTitle("")}
      />
      <Title onMouseOver={() => setProjectTitle(props.title)}>
        {projectTitle}
      </Title>
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
`;

const Wrapper = styled.div`
  flex: 1 1 50%;
  position: relative;
  &:hover {
    opacity: 0.625;
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
  color: #757d7e;
  font-family: "Regular";

  @media (max-width: 900px) {
    font-size: 32px;
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;
