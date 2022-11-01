import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";

export default function LogoSection(props) {
  return (
    <SectionWrapper color={props.color}>
      <LogoTitle>Logo</LogoTitle>
      <LogoItemsWrapper>
        <LogoImg src={require("./ParakeetLogo.png")} />
        <LogoText>
          We thought carefully about how to make our logo. The thick lines of
          the bird and the simplified design of the picture make it seem
          friendly and evokes a feeling that this brand relates to children in
          some way, but the clean shape and elegant font ensures it still feels
          professional. The teal color was chosen because it relates to blue,
          which is a credible color, but it is also more playful than a dark or
          plain blue, so it feels more friendly and like it has something to do
          with kids.{" "}
        </LogoText>
      </LogoItemsWrapper>
    </SectionWrapper>
  );
}

const LogoItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3vw;
  align-items: center;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const SectionWrapper = styled.div`
  padding: 0px 150px 25px 150px;
  background-color: ${(props) => props.color};
  @media (max-width: 800px) {
    padding: 0px 30px 25px 30px;
  }
`;

const LogoTitle = styled.h5`
  font-size: 25px;
  margin: 0 0 25px 0px;
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
`;

const LogoText = styled.p`
  margin: 0;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  color: #000000;
  opacity: 0.71;
  line-height: 30px;
`;

const LogoImg = styled.img`
  width: 40vw;
  @media (max-width: 1000px) {
    width: 30vw;
  }
  @media (max-width: 800px) {
    width: 60vw;
  }
`;
