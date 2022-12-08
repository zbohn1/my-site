import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentNoImg from "./ContentNoImg";
import PrevNext from "./PrevNext.js";

export default function Todo() {
  const marginStyles = {
    afterImage: 50 + "px",
    afterText: 43 + "px",
  };
  return (
    <div>
      <GlobalStyles />
      <Header color="#efe6fe" />
      <ContentNoImg
        title="To Do"
        margin1="firstContent"
        margin2="middle"
        color="#efe6fe"
      >
        To Do was my first significant project in a computer science class,
        which I completed at the end of taking Harvard University’s CS50. The
        project is a to-do-list and pomodoro combined website, with myself as
        the target user.
      </ContentNoImg>
      <ContentNoImg title="Problem" margin1="middle" margin2="middle">
        I make extensive use of to-do-lists and pomodor timers, but I always
        have to switch back and forth between the two apps, which is
        time-consuming and hurts my focus.
      </ContentNoImg>
      <ContentNoImg
        title="Solution"
        margin1="middle"
        margin2="middle"
        color="#efe6fe"
      >
        My solution was to combine both the to-do-list and the timer into one
        app. It is a full-stack app that was created with a Python and SQL
        back-end and an HTML, CSS, and Javascript front-end. I also used the
        Flask framework. Users can create and delete tasks and label them as
        today, tomorrow, and long term, as well as priority one, priority two,
        and priority three. The tasks are automatically sorted and color-coded
        according to these timelines and priorities. You can also view your
        deleted tasks on the history tab. Also, for each task, you can click the
        start timer button, and a timer will start so that you can track how
        much time you are spending on tasks. Clicking the stop timer button will
        reset the timer. Check out the app in the video below, or check out the
        Github repository{" "}
        <ExternalLink href="https://github.com/zbohn1/ToDo/tree/main">
          here.
        </ExternalLink>{" "}
      </ContentNoImg>
      <FlexContainer>
        <ImgContainer>
          <Frame
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-fv1QwvMGGw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Frame>
        </ImgContainer>
      </FlexContainer>
      <PrevNext prev="/helena" next="/zs" />
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

const GitLink = styled.a`
  text-decoration: underline;
  color: black;
  &:hover {
    color: #2997ff;
`;

const ExternalLink = styled.a`
  text-decoration: underline;
  color: black;
  &:hover {
    color: #2997ff;
  }
`;
