import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentXVideo from "./ContentXVideo.js";
import ContentNoImg from "./ContentNoImg.js";

export default function ProductFeedback() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <ContentXVideo
        src={require("./ProductFeedbackScreencast.mp4")}
        title="Product Feedback Web App"
      >
        I wanted to demonstrate my web development skills and learn more in the
        process, so I created this responsive web app that is meant for product
        feedback for a fictional company. Users can filter and sort their
        feedback, comment and reply to each piece of feedback, add new feedack,
        and edit existing feedback. The website is fully responsive and there
        are different sections for current feedback (on the home screen), and
        planned, in-progress, and live feedback (on the roadmap). I received the
        designs from a website called Frontend Mentor, which provides challenges
        for front-end developeres. This was the hardest one they offered.{" "}
        <Break /> The languages I used for the web app are HTML5, CSS3 (using
        SASS as a pre-processor), and React. You can view the repository with
        the code{" "}
        <ExternalLink href="https://github.com/zbohn1/feedback-app">
          here
        </ExternalLink>{" "}
        or click the button below to interact with the live website.
        <Break />
        <ExternalLink href="https://zbohn1.github.io/feedback-app/#/">
          <FeedbackButton>Live Web App</FeedbackButton>
        </ExternalLink>
      </ContentXVideo>
      <ContentNoImg margin="afterImage" title="Problem">
        As the design was already set, the key problem for this project was how
        to implement the design with technology. In addition to what languages
        to choose, I needed to learn how to manage state across different
        routes, how to manage the user data, and what components to create for
        the application. There were also challenges in the design like building
        custom selects, buttons, and other components, making everything
        responsive with different menus, as well as how to make everything
        accessible.
      </ContentNoImg>
      <ContentNoImg margin="afterText" title="Solution">
        I chose React for the application because there were many reusable
        pieces of design that I could turn into components, and also because I
        wanted to sharpen my React skills. To solve the problem of state on
        multiple routes, I used React's ContextAPI. I created state that
        encapsulated all of the JSON data across components and then updated
        that data based on different functions that applied to specific
        components. I made many modular components, trying to follow SOLID
        principles in the process. And for the custom selects and buttons, I
        opted to make use of the native item so that I could maintain the
        accessibility advantages, but hiding it so that I could render custom
        CSS and functionality on top.
      </ContentNoImg>
      <ContentNoImg margin="afterText" title="Reflection">
        I had not been introduced to the single responsibility principle when I
        started this project, so although I intuitively followed it to a large
        extent, there were still some components that had multiple functions. If
        I were to refactor this code, I would break up some of my components
        into even smaller components and functions.
      </ContentNoImg>
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
