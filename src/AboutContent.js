import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

export default function AboutContent(props) {
  return (
    <div>
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
      {props.link}
    </div>
  );
}

const Header = styled.h6`
  margin: 0;
  margin-bottom: 14px;
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
  font-size: 20px;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 25px;
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  color: #000000;
  opacity: 0.71;
`;
