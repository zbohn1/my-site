import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import Project from "./Project.js";
import { Link } from "react-router-dom";

export default function Quote(props) {
  return (
    <div>
      <QuoteBody>
        <Text>{props.children}</Text>
      </QuoteBody>
      <QuoteTriangle></QuoteTriangle>
    </div>
  );
}

const Text = styled.p`
  color: #0f42a5;
  margin: 0;
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
  font-size: 14px;
  opacity: 0.71;
  line-height: 20px;
`;

const QuoteBody = styled.div`
  padding: 30px 20px;
  background-color: white;
  max-width: 300px;
`;

const QuoteTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
`;
