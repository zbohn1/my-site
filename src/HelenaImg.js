import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";

const HelenaImg = (props) => {
  return (
    <div>
      <Img src={props.src} />
      <Text>{props.name}</Text>
      <Text>{props.vocation}</Text>
    </div>
  );
};

const Text = styled.p`
  font-family: "Regular", "Hnmedium", Helvetica, Arial, sans-serif;
  color: #000000;
  opacity: 0.71;
  line-height: 15px;
  font-size: 12px;
  margin: 0;
  text-align: center;
  width: 125px;
`;

const Img = styled.img`
  width: 125px;
  height: 140px;
`;

export default HelenaImg;
