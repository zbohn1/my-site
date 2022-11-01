import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

export default function ContentNoImg(props) {
  const marginStyles = {
    firstContent: 50 + "px",
    middle: 25 + "px",
    lastContent: 0 + "px",
  };

  return (
    <FlexContainer
      style={{
        paddingTop: marginStyles[props.margin1],
        paddingBottom: marginStyles[props.margin2],
      }}
      color={props.color}
    >
      <ContentContainer>
        <Title> {props.title}</Title>
        <Text> {props.children}</Text>
      </ContentContainer>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  margin-bottom: 0px;
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => props.color};

  @media (max-width: 700px) {
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  color: #000000;
  opacity: 0.71;
  line-height: 30px;
`;

const Title = styled.h2`
  margin: 0px;
  margin-bottom: 32px;
  line-height: 32px;
  font-size: 40px;
  font-family: "Medium", "Hnmedium", Helvetica, Arial, sans-serif;
`;

const ContentContainer = styled.div`
  flex: 1;
`;
