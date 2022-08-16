import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

export default function ContentXImage(props) {
  return (
    <FlexContainer>
      <ImgContainer>
        <LeftImage src={props.src} />
      </ImgContainer>
      <ContentContainer>
        <Title> {props.title}</Title>
        <Text> {props.children}</Text>
      </ContentContainer>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  margin-left: 57px;
  margin-right: 57px;
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  gap: 48px;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const LeftImage = styled.img`
  min-width: 300px;
  height: 100%;
  width: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  color: #000000;
  opacity: 0.71;
  line-height: 30px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0px;
  margin-bottom: 32px;
  line-height: 32px;
  font-size: 40px;
  font-family: "Medium", "Hnmedium", Helvetica, Arial, sans-serif;
`;
