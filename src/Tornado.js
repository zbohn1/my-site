import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentXVideo from "./ContentXVideo.js";
import ContentNoImg from "./ContentNoImg.js";

export default function Tornado() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <ContentXVideo src={require("./tornado.mp4")} title="ThreeJS Tornado">
        I made this 3D tornado in Three.js, a 3D javascript library built on top
        of WebGL. It was for my class Creative Code. It was good practice with
        object-oriented programming and 3D technologies. The tornado is an
        object made up of a large amount of smaller ring objects, which are
        custom BufferGeometries that each contain particles. I used geometry to
        position the particles around a circle and rotate each ring individually
        so the inner rings spin faster than the outer rings, like a real
        tornado. And like a real tornado, I made the movement somewhat random.
      </ContentXVideo>
    </div>
  );
}

const Frame = styled.iframe`
  width: 75vw;
  height: 40vw;
`;
