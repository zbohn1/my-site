import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

function FirstContent() {
  return (
    <BigWrapper>
      <TextWrapper>
        <Title>Hi, I'm Zach.</Title>
        <Title>A Design Technologist.</Title>
        <Description>
          I designed and coded this website using React to showcase my projects
          and skills. I am a developer and designer currently getting my{" "}
          <ExternalLink href="https://www.colorado.edu/atlas/academics/grad/ctd-ci">
            Creative Technology and Design
          </ExternalLink>{" "}
          masters at CU Boulder. I am also a former management consultant and a
          co-founder of{" "}
          <ExternalLink href="https://www.helena.org">Helena.org</ExternalLink>.
        </Description>
      </TextWrapper>
      <ImgWrapper>
        <img src={require("./BigLightbulb.png")} width="286px" height="450px" />
      </ImgWrapper>
    </BigWrapper>
  );
}

export default FirstContent;

const BigWrapper = styled.div`
  display: flex;
  margin: 0px 57px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
  @media (max-width: 300px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 60px;
  font-family: "Medium", "Hnmedium", Helvetica, Arial, sans-serif;
  line-height: 66px;
  @media (max-width: 700px) {
    font-size: 48px;
    line-height: 50px;
    &:first-of-type {
      margin-top: 25px;
    }
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

const Description = styled.h6`
  margin: 0;
  margin-top 25px;
  font-size: 20px;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  color: #000000;
  opacity: 0.71;
  @media (max-width: 700px) {
    font-size: 18px;
    margin-bottom: 25px; 
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ExternalLink = styled.a`
  text-decoration: underline;
  color: black;
  &:hover {
    color: #2997ff;
  }
`;
