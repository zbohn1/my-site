import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";

function Divider() {
  return <SectionDivider />;
}

export default Divider;

const SectionDivider = styled.hr`
  background-color: #ffffff;
  height: 10px;
  border: none;
  margin-top: 63px;
  margin-bottom: 32px;
`;
