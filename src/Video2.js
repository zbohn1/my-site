import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

export default function Video2(props) {
  const marginStyles = {
    firstContent: 50 + "px",
    middle: 25 + "px",
    lastContent: 0 + "px",
  };
  return (
    <div>
      <FlexContainer
        color={props.color}
        style={{
          paddingTop: marginStyles[props.margin1],
          paddingBottom: marginStyles[props.margin2],
        }}
      >
        <LeftVideo width="10px" height="20vw" controls loop>
          <source src={props.src} type="video/mp4" />
        </LeftVideo>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  align-items: flex-start;
  gap: 48px;
  background-color: ${(props) => props.color};
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const LeftVideo = styled.video`
  min-width: 300px;
  height: 45vw;
  width: 70vw;
  @media (max-width: 700px) {
    width: 90vw;
    height: 55vw;
  }
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
