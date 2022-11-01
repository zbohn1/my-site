import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentXImage from "./ContentXImage.js";
import ContentNoImg from "./ContentNoImg.js";

export default function PrevNext(props) {
  return (
    <OuterFlex color={props.color}>
      <InnerFlex>
        <Link to={props.prev}>
          <img src={require("./Prev.png")} />
        </Link>
        <Link to={props.next}>
          <img src={require("./Next.png")} />
        </Link>
      </InnerFlex>
    </OuterFlex>
  );
}

const InnerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 6.1vw;
`;

const OuterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.color};
  padding-top: 25px;
  padding-bottom: 25px;
`;
