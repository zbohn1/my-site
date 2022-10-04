import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentXVideo from "./ContentXVideo.js";
import ContentNoImg from "./ContentNoImg.js";

export default function Icicles() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <ContentXVideo src={require("./icicles.mp4")} title="P5JS Icicles">
        I made these icicles in P5JS, a javascript 2D animation library that is
        built off of the canvas html element. It was for my class Creative Code.
        Our assignment was to design something that evoked the concept of
        slowness, and icicles seemed like the perfect representation of that. It
        was good practice with object-oriented programming, particle system
        design, and communication between objects. I used an icicle object and a
        droplet object, and the droplet object would learn about the icicle
        object in order to understand when to drop. The droplets fall at random
        times to mimic real icicles, and the icicles grow at random speeds to
        mimic the real world as well.
      </ContentXVideo>
    </div>
  );
}

const Frame = styled.iframe`
  width: 75vw;
  height: 40vw;
`;
