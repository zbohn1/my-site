import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";

export default function Contact() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>Contact</h2>
    </div>
  );
}
