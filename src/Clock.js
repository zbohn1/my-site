import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentXVideo from "./ContentXVideo.js";
import ContentNoImg from "./ContentNoImg.js";

export default function Clock() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <ContentXVideo src={require("./clock.mp4")} title="Rainbow Clock">
        I made this animation in P5JS, a javascript library built on top of the
        canvas html element. It was for my Creative Code Class. Our assignment
        was to build something related to time. Each of the rings of the
        animation light up at a slightly different speed, with a half second
        offset. The red squares change color every half second, the orange every
        second, the yellow every second and a half, etc. I made the clock
        rainbow to celebrate LGBTQ+ family members. I used a sin wave to create
        the smooth, pulsating effect.
      </ContentXVideo>
    </div>
  );
}

const Frame = styled.iframe`
  width: 75vw;
  height: 40vw;
`;
