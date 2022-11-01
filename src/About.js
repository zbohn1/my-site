import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import AboutContent from "./AboutContent.js";
import Divider from "./Divider.js";
import Resume from "./resume.pdf";

export default function About() {
  return (
    <div>
      <GlobalStyles />
      <Header color="#f5f5f5" />
      <FlexContainer>
        <ImgContainer>
          <Portrait src={require("./Portrait.png")} />
        </ImgContainer>
        <ContentContainer>
          <Title>
            I'm Zach. I use engineering, design, and entrepreneurial thinking to
            deliver impactful user experiences.
          </Title>
          <Sectioner />
          <AboutContent
            header="My Background:"
            text="I’m a masters student in Creative Technology and Design at CU Boulder, where I’m focused on full-stack web development, UI and UX design, and emerging and creative technologies. I am currently interning at Seminaut Games Studios as a front-end development and UX design intern. Previously, I spent two years in management consulting, where I advised on corporate strategy, performed marketing and other market research, and helped design and launch a new consulting digital product. I graduated from the USC Marshall School of Business and co-founded Helena.org, a non-profit which tackles societal problems by leveraging the influence and capital of world leaders."
          />
          <AboutContent
            header="My Process:"
            text="My process is to identify a target user with a problem, identify a solution to that user’s problem, test it through user interviews and rapid prototyping, and repeat the cycle."
          />
          <AboutContent
            header="Technical Skills: "
            text="HTML5, CSS3, JavaScript, React, ThreeJS, P5JS, SASS, Python, SQL, Flask, Figma, Styled-Components"
          />
          <ButtonContainer>
            <Link to="/contact">
              <Button>Get in Touch</Button>
            </Link>
            <a href={Resume} target="_blank">
              <Button2> View Resume </Button2>
            </a>
          </ButtonContainer>
        </ContentContainer>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.div`
  margin-left: 57px;
  margin-right: 57px;
  display: flex;
  align-items: flex-start;
  gap: 35px;
  justify-content: center;
  margin-top: 100px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

const Portrait = styled.img`
  max-height: 673px;
  max-width: 454px;
  min-width: 200px;
  height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 38px;
  font-size: 40px;
  font-family: "Medium", "Hnmedium", Helvetica, Arial, sans-serif;
  line-height: 50px;
  width: fit-content;
  @media (max-width: 700px) {
    line-height: 40px;
    text-align: center;
    margin-bottom: 19px;
    font-size: 35px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex: 0.5 1;
  justify-content: center;
  align-items: center;
`;

const Sectioner = styled.hr`
  background-color: #ffffff;
  height: 10px;
  border: none;
  margin-top: 60px;
  margin-left: -57px;
  margin-right: -57px;
  margin-bottom: 60px;
  @media (min-width: 700px) {
    display: none;
  }
`;

const Button = styled.button`
  height: 61px;
  width: 222px;
  background-color: #000000;
  color: #f5f5f5;
  font-size: 20px;
  border-radius: 7px;
  border-color: #000000;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  margin-top: 10px;
  &:hover {
    opacity: 0.71;
  }
`;

const Button2 = styled.button`
  height: 61px;
  width: 222px;
  background-color: #565d60;
  color: #f5f5f5;
  font-size: 20px;
  border-radius: 7px;
  border-color: #565d60;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  margin-top: 10px;
  &:hover {
    opacity: 0.71;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
