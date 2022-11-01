import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import Video2 from "./Video2.js";
import ContentNoImg from "./ContentNoImg.js";
import PrevNext from "./PrevNext.js";

export default function AudioVisualizer() {
  return (
    <div>
      <GlobalStyles />
      <Header color="#f5f5f5" />
      <Video2
        src={require("./RainbowVisualizer.mp4")}
        title="Audio Visualizer"
        margin1="firstContent"
        margin2="middle"
        color="#f5f5f5"
      ></Video2>
      <ContentNoImg
        margin="afterImage"
        title="Audio Visualizer"
        margin1="middle"
        margin2="middle"
      >
        I made this audio visualizer in Three.js for my creative code class. Our
        assignment was simply to make something with audio. I thought this was a
        good opportunity to learn shaders as well. To get the rainbow coloring,
        I passed random color values as attributes to the vertex shader and then
        as varyings to the fragment shader. I then captured the frequency of the
        song in an array. I passed this array as a uniform to the vertex shader
        and varied the z values based on the sin of the x position, y position,
        and music frequency. It took some time to get the desired effect, but I
        ultimately ended up using the absolute value of the x and y coordinates
        for each vertex as the index of the frequency array and then added them
        together before multiplying by amplitude. This created a cross-like
        effect where values in the cross would pick up softer frequencies, while
        values toward the corners would show only with larger frequencies.
      </ContentNoImg>
      <PrevNext prev="/todo" next="/tornado" />
    </div>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ImgContainer = styled.div`
  margin-left: 57px;
  margin-right: 57px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex: 1 1 0;
`;

const Frame = styled.iframe`
  width: 75vw;
  height: 40vw;
`;

const Break = styled.span`
  display: block;
  margin-bottom: 11px;
`;

const BoldSpan = styled.span`
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
`;

const FeedbackButton = styled.button`
  background-color: #ad1fea;
  color: #f2f4ff;
  font-weight: 550;
  text-decoration: none;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  padding: 10px 20px;
  font-family: "Jost", sans-serif;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 700px) {
    padding: 10px 15px;
  }
`;

const ExternalLink = styled.a`
  text-decoration: underline;
  color: black;
  &:hover {
    color: #2997ff;
  }
`;
