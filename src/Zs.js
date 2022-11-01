import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ContentNoImg from "./ContentNoImg";
import ContentXImage from "./ContentXImage";
import PrevNext from "./PrevNext.js";

export default function Zs() {
  return (
    <div>
      <GlobalStyles />
      <Header color="#efe6fe" />
      <ContentNoImg
        title="ZS Associates ctDNA"
        margin1="firstContent"
        margin2="middle"
        color="#efe6fe"
      >
        I worked at ZS Associates as a consultant advising companies on how to
        launch new products and also conducting market research. For this case
        study, our client was a circulating tumor DNA (ctDNA) company that
        developed a test for early detection of colorectal cancer from one blood
        draw. They wanted to evaluate expansion of the technology to other
        indications, especially lung and breast. Our task was to decide which
        indication to create a product for next, and whether it should be
        designed as a stand-alone or a multi-cancer test combined with the
        company’s colorectal cancer offering.
      </ContentNoImg>
      <ContentNoImg title="Our Process" margin1="middle" margin2="middle">
        First, we created a discussion guide. Then, we conducted qualitative
        interviews using this guide and created a qualitative report for the
        client. Next, we used the insights from the qualitative interviews to
        create a quantitative survey for a higher sample population. We then
        analyzed the quantitative survey and created a final report with our
        recommendations. My team included me, my manager, two analytics team
        members, and a partner. I was reponsible for the first pass of the
        discussion guide and qualitative interview reports, which was then
        edited by my manager and the partner. I also refined the quantitative
        survey, which the analytics team members created a draft of, and I
        collaborated with the analytics team members to analyze the quantitative
        survey and to create the first pass of the final report. This included
        co-creating the final framework that we used for our recommendation.
      </ContentNoImg>
      <ContentNoImg
        title="Discussion Guide and Quantitative Survey"
        margin="afterText"
        margin1="middle"
        margin2="middle"
        color="#efe6fe"
      >
        The discussion guide for the qualitative interviews focused on what
        physicians are currently doing, their preferences around blood-based
        screening, and a mock product profile section to evaluate future
        dynamics. The quantitative survey validated and built on our learnings
        from the qualitative interviews. It covered current attitudes and
        dynamics and then focused on future screening preferences to identify
        which product made the most sense to create.
      </ContentNoImg>
      <ContentXImage
        title="Framework"
        src={require("./ZSImg1.png")}
        margin1="middle"
        margin2="middle"
      >
        After we fielded the interviews and survey and analyzed the results, I
        worked with the team to create a framework that we used to provide a
        recommendation to the company on how to proceed. The framework focused
        on results from our research as well as a section for additional
        considerations. Other questions in our research that weren’t used in the
        framework were still useful in providng more depth and additional
        insights for the final presentation.{" "}
      </ContentXImage>
      <ContentXImage
        title="Results and Reflection"
        src={require("./ZSImg2.png")}
        margin1="middle"
        margin2="lastContent"
        color="#efe6fe"
      >
        We used the framework to score each parameter and provide a final
        recommendation. We recommended creating a targeted panel that adds lung
        cancer onto their existing colorectal cancer test. This combination
        increases the total benefitting patient population while scoring well
        across the other metrics. The clients agreed with the recommendation and
        went on to develop the product.{" "}
      </ContentXImage>
      <PrevNext prev="/helena" next="/icicles" color="#efe6fe" />
    </div>
  );
}
