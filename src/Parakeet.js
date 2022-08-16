import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentXImage from "./ContentXImage.js";
import ContentNoImg from "./ContentNoImg.js";

export default function Parakeet() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <ContentXImage title="Parakeet" src={require("./ParakeetIcon.png")}>
        Parakeet is an app for expectant and new parents to find physicians,
        receive health information tailored to their child’s development stage,
        and connect with one another about pregnancy and early childcare issues.
        I founded the company, recruited two other designers and a pediatrician,
        raised $75,000 and led it until I was forced to close it down due to
        health issues. <Break />I was involved with every aspect of the business
        as our team was small. This included UX and UI design, problem and
        market validation, and brand and business planning. At this point in my
        career, I was not a developer, so I did not code the app myself,
        although I did help create an InVision prototype.
      </ContentXImage>
      <ContentNoImg title="Problem and Customer Validation" margin="afterImage">
        Health care is disorganized and complex. I had been interested for quite
        some time in the digital health space and creating an experience that
        helped solve this problem for a small subset of this market by combining
        information, phyisican access, and community, which is noticeably absent
        for most health conditions. The first question I faced was which patient
        type to target. After creating a list of potential options, I vetted
        them by the strength of the problem for that particular segment, their
        motivation to better their health, the market size, their technology
        use, and the strength of the current solutions in the market. After
        conducting this analysis, which involved both primary interviews of
        potential customers and secondary research, I decided on creating a
        solution for expectant and new parents, because of the results of our
        market research, which are below: <Break />{" "}
        <BoldSpan>Overwhelmed and Lonely: </BoldSpan>
        Amidst the excitement of pareenthood, primary and secondary research
        revealed parents reported feeling overwhelmeed with all they had to
        learn, and sometimes lonely. These needs validated the usefulness of
        easy access to medically-vetted content, high-quality, accessible
        physicians, and a community of peers. <Break />{" "}
        <BoldSpan>Intrinsic Motivation and Resource Hungry:</BoldSpan> Primary
        and secondary research revealed that many new parents want fresh
        resources to help them with parenting and have strong motivation to
        learn. <Break /> <BoldSpan>High Technology Use Demographic: </BoldSpan>
        New parents are a high technology use demographic and most are not
        intimidated by using mobile applications. <Break />{" "}
        <BoldSpan>
          Market Size Presents Viable Economic Opportunity:{" "}
        </BoldSpan>{" "}
        There are 4 million babies born in the U.S. each year, and new parents
        spend an average of $12,000 on them, prersenting a more viable economic
        opportunity than many other demographics. <Break />{" "}
        <BoldSpan>Existing but Flawed Solutions: </BoldSpan>To this day, many
        parents turn to BabyCenter for information. BabyCenter lacks easy access
        to physician-vetted content and has an outdated UI. And many new parent
        groups are on Facebook, which isn’t made for health care. These
        competitors proved that there is a need but were flawed solutions, and
        most new parents we interviewed were dissatisfied with them.{" "}
      </ContentNoImg>
      <ContentNoImg title="Brand and Visual Identity" margin="afterText">
        I recruited three people to the team: a pediatrician, who was in charge
        of medical content, a software engineer, and another designer to work
        with me. We created brand values, tone, visual guidelines, and personas.
        We also chose a name, created a design comparisons document for each
        screen, an agile product requirements document, and a business plan. I
        was heavily involved in each of these activities. Brand values, tone,
        and visual guidelines were created after further user interviews, and
        are below: <Break /> <BoldSpan>Brand values: </BoldSpan> trust, empathy,
        usefulness, empowerment, community <Break />{" "}
        <BoldSpan> Tone: </BoldSpan> helpful, empathetic, approachable,
        empowering <Break /> <BoldSpan>Visual principles: </BoldSpan>simplified,
        clear, clean but comfortable, bright but not too cheerful, white space{" "}
        <Break /> <BoldSpan>Name: </BoldSpan> Parakeet - we wanted an animal
        name for it to be easily relatable. Parakeets are small, bright, cute
        bird that are friendly, sociable, and communicative, which aligned with
        our brand identity and evoked images that corresponed well to babies.
      </ContentNoImg>
      <ContentNoImg title="Wireframes and Mock-ups" margin="afterText">
        {" "}
        We made wireframes and low-fidelity color mock-ups in Sketch. and then
        created high-fidelity color mock-ups of the entire app. I worked with
        another designer to create these. Below you can find the home screen,
        physician profile screen, and community feed screen. The home screen was
        designed so that new parents could quickly access everything they need
        and also be exposed to relevant, helpful content. The version below was
        designed from the perspective of an expectant mom. It has a quick access
        tab that allows users to access their care plan, find a doctor, and
        track their pregnancy, among other tools. It also has a “for today” tab
        that allows the mom to view advice and potential “to-dos” for the day,
        as well as articles and posts from the community towards the bottom. The
        physician profile section was designed to provide a detailed and
        transparent picture of each pediatrician and gynecologist. At the top,
        we included the quick information that everyone wants to see. We then
        broke up the bottom into an “About” and “Review” section. The about
        section, which isn’t pictured below, provided more information about the
        physician, while the review section goes beyond sites like ZocDoc by
        allowing patients to tag skills and traits about the physician, which
        was an idea we took from patient research. Finally, the community page
        was designed to allow parents to find answers to common questions, join
        groups of moms with similar location, interests, or birth timelines,
        read more in-depth stories about particular topics (which feature arose
        from a need discovered in research to hear in-depth inspiration from
        peers), and save posts or questions that are helpful. Unlike competitors
        such as BabyCenter, our feed was designed for exploration (rather than
        just optimized to answer specific pre-existing questions).{" "}
      </ContentNoImg>
      <FlexContainer>
        <ImgContainer>
          <Img src={require("./ParakeetHome.png")} />
        </ImgContainer>
        <ImgContainer>
          <Img src={require("./ParakeetPhysician.png")} />
        </ImgContainer>
        <ImgContainer>
          <Img src={require("./ParakeetCommunity.png")} />
        </ImgContainer>
      </FlexContainer>
      <ContentNoImg title="Reflection" margin="afterText">
        We accomplished quite a bit before I was forced to shut the start-up
        down due to health problems, and the start-up was a great learning
        experience. However, knowing what I know now, next time I think that we
        could have done a better job of testing our designs incrementally with
        customers before building out the entire app. And, although I couldn’t
        code at the time, next time I would definitely rapidly prototype a
        smaller part of the app that tested our core hypothesis with customers
        in a minimum viable product, rather than focusing on building out a very
        large amount of functionality upfront.{" "}
      </ContentNoImg>
    </div>
  );
}

const Break = styled.span`
  display: block;
  margin-bottom: 11px;
`;

const BoldSpan = styled.span`
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-left: 57px;
  margin-right: 47px;
  gap: 5vw;
  margin-top: 20px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  @media (max-width: 700px) {
    width: 50vw;
  }
`;
