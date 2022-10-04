import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentNoImg from "./ContentNoImg";
import HelenaImg from "./HelenaImg";
import ContentXImage from "./ContentXImage";

export default function Helena() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <ContentNoImg title="Helena" margin="afterImage">
        <HelenaLink href="http://www.helena.org">Helena.org</HelenaLink> is a
        global problem-solving organization. Helena uses its own resources and a
        group of influential members to work on projects that implement
        solutions to critical societal problems. Members come from diverse
        industries, generations, geographies, and beliefs. Helena chooses
        projects that could have a global impact and matches interested members
        with these projects. The members contribute however they can, by
        providing their advice, investing in the solution, or connecting the
        project with people who can help. Helena also leverages its own funds
        and human capital to work directly on the problems. The most significnat
        project, COVID-19 Response, moved over 37M pieces of PPE to hospitals
        and health care workers that needed them. The organization has also
        raised $21M+ to date.
      </ContentNoImg>
      <ContentNoImg title="Our Process" margin="afterText">
        I co-founded the organization with my partner, Henry Elkus. First, we
        identified a problem, which was that influential people often don’t
        contribute to social good in the ways that could have the most impact.
        Our initial idea was to create a mentorship group that connected current
        and future influencers from different disciplines and generations, with
        a focus on preparing these future leaders for social impact. However,
        our idea evolved after we began conducting market research by
        interviewing potential members. We learned through our stakeholder
        interviews that in addition to mentoring, members would be interested in
        collaborating with one another on projects. This would have the added
        benefit of increasing the chance for impact and maximizing social return
        on investment. After we refined the concept, we created marketing
        materials, recruited members, created fundraising documents, and finally
        began projects.
      </ContentNoImg>
      <ContentNoImg title="Members" margin="afterText">
        After iterating on the solution and value proposition, we created
        marketing materials that explained the benefits of the organization and
        then customized that outreach for each individual. We used both cold and
        warm outreach to recruit the Helena members. A few members include the
        following:
      </ContentNoImg>
      <FlexContainer>
        <HelenaImg
          src={require("./BeatriceFihn.png")}
          name="Beatrice Fihn"
          vocation="Nobel Peace Prize Laureate"
        />
        <HelenaImg
          src={require("./EvanSpiegal.png")}
          name="Evan Spiegal"
          vocation="CEO, Snapchat"
        />
        <HelenaImg
          src={require("./RayChambers.png")}
          name="Ray Chambers"
          vocation="Global Ambassador, World Health Organization"
        />
        <HelenaImg
          src={require("./WendyKopp.png")}
          name="Wendy Kopp"
          vocation="Founder, Teach for America"
        />
        <HelenaImg
          src={require("./JohnBrennan.png")}
          name="John Brennan"
          vocation="Former Director, Central Intelligence Agency"
        />
        <HelenaImg
          src={require("./RichLesser.png")}
          name="Rich Lesser"
          vocation="CEO Boston Consulting Group"
        />
      </FlexContainer>
      <ContentXImage
        title="Impact"
        margin="afterImage"
        src={require("./HelenaDash.png")}
      >
        Helena has conducted a multitude of major projects. Helena’s most
        impactful project moved over 37M pieces of PPE to hospitals and health
        care workers that needed them. Helena provided the bridge financing for
        this PPE after raising money for the cause from the members so that
        hospitals wouldn’t have to put up the money. We also connected hospitals
        with the suppliers of PPE and created a platform to identify which
        hospitals needed PPE and in what quantities, as per the image on the
        left (above if you're on mobile).
      </ContentXImage>
      <ContentNoImg title="Reflection" margin="afterImage">
        The project achieved its impact and fundraising goals, and we were able
        to reach product/market fit relatively quickly. Two areas we could have
        improved upon were being more structured in the way we gathered user
        needs and incorporating a more agile approach to refining the concept.
      </ContentNoImg>
    </div>
  );
}

const HelenaLink = styled.a`
  text-decoration: underline;
  color: black;
  &:hover {
    color: #2997ff;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-left: 57px;
  margin-right: 57px;
  flex-wrap: wrap;
  gap: 2vw;
  margin-top: 20px;
`;
