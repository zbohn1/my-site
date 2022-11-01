import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Quote from "./Quote.js";

export default function QuoteSection(props) {
  return (
    <SectionWrapper>
      <QuotesTitle>Potential Customer Quotes</QuotesTitle>
      <QuotesWrapper color={props.color}>{props.children}</QuotesWrapper>
    </SectionWrapper>
  );
}

const QuotesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
  align-items: center;
  background-color: ${(props) => props.color};
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const SectionWrapper = styled.div`
  padding: 0px 150px 25px 150px;
  @media (max-width: 700px) {
    padding: 0px 30px 25px 30px;
  }
`;

const QuotesTitle = styled.h5`
  font-size: 25px;
  margin: 0 0 25px 0px;
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
`;
