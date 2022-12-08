import styles from "./AS.module.css";
import Bubbles from "./Bubbles.js";
import * as d3 from "d3";
import BarChart from "./BarChart.js";
import ActionContainer from "./ActionContainer.js";
import React, { useContext } from "react";
import { Context } from "./Context";
import Header from "./Header";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import PrevNext from "./PrevNext.js";

export default function ASMain() {
  window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
      e.preventDefault();
    }
  });

  return (
    <div className={styles.App}>
      <GlobalStyles />
      <Header color="#f5f5f5" />
      <h1 className={styles.title}>The Resurgence of Anti-Semitism</h1>
      <p className={styles.date}>December 12th, 2022</p>
      <div className={styles.group1}>
        <h2 className={styles.header}>
          Anti-semitism is sweeping across the U.S.
        </h2>
        <p className={styles.intro}>
          Many people say anti-semitism isn't a problem. However, there has been
          a resurgence of anti-semitism that is growing and has come to a head
          this year with high-profile public figures like Kanye West and Kyrie
          Irving sharing anti-semitic beliefs and content. Kanye on December 1st
          praised Hitler, denied the holocaust, and suggested that Jews control
          the media. He also posted a swastika on twitter. Kyrie Irving, on the
          other hand, shared a link to a video that denies the Holocaust. It
          also contended that Jewish people were the primary enslavers of Black
          people, that black people alone are the original Isrealites, and that
          modern Jewish people are liars and false-worshippers who have stolen
          the religious heritage of black people and have engaged in a cover-up
          to prevent black people from knowing their true identity. When Irving
          was asked if he had any anti-semitic beliefs his response was "I can't
          be antisemtic if I know where I come from." These actions have had
          large ripple effects, with the movie Irving promoted quickly turning
          into a best-seller.
        </p>
        <p className={styles.intro2}>
          To make matters worse, Donald Trump recently dined with Kanye West and
          Nick Fuentes, a well-known anti-semitist. Although Donald Trump
          claimed he didn't know who Nick Fuentes was, he certainly was aware of
          what Kanye West said. It is alarming that someone as clearly
          anti-semitic as Kanye was given a seat at a former president's and
          current candidate's dinner table. In November, anti-semitic hate
          crimes increased by 125%, likely as a result of these actions.
        </p>
        <h2 className={styles.header}>
          Anti-semitism is also prevalent across the globe
        </h2>
        <p className={styles.intro3}>
          And it's not just the U.S. KFC Germany recently created a promotion
          for their chicken in honor of Kristallnacht. Kristallnacht was a
          horrible event that is considered the start of the holocaust, where
          mobs took to the streets across Nazi Germany, ravaging Jewish homes
          and businesses, killing 94 Jews and sending over 30,000 Jews to
          concentration camps. Apparently, KFC Germany as a whole did not agree
          with the promotion, as the corporation apologized. However, it's a
          symbol of how anti-semitism is on the rise across the world as well as
          in the U.S. Recently, the Anti-Defamation League surveyed the
          population of countries that contain 4.1 billion adults, which is most
          of the global population. Each dot below represents 7.5 million
          people. <strong>Scroll down</strong> to see the proportion of that
          population that is anti-semitic(red) and that is Jewish(blue). There
          are 1.09 billion people who harbor anti-semitic attitudes about the 15
          million Jewish people.
        </p>
        <div id="p5Container" className={styles.can}>
          <Bubbles />
        </div>
      </div>
      <h2 className={styles.header}>
        U.S. anti-semitic hate crimes have risen dramatically
      </h2>
      <p className={styles.hateCrimes}>
        The number of hate crimes against Jewish people has also risen
        dramatically in recent years. Although the numbers were declining in the
        early 2010's, from 2013 to 2021, they have almost quadrupled, rising
        from 751 in 2013 to 2,717 crimes in 2021.This was the highest number of
        hate crimes against Jews since the ADL began tracking them in 1976.
      </p>
      <div id="barDiv" className={styles.graph}>
        <BarChart />
      </div>
      <h2 className={styles.header}>Taking action: how to help</h2>
      <p className={styles.callToAction}>
        It's important to note that this historic high in anti-semitic incidents
        was BEFORE the overt anti-semitism incidents with Kanye West and Kyrie
        Irving, which have stirred up even more hate. So, what can you do?
      </p>
      <div id="actionDiv">
        <ActionContainer
          src={require("./checkbox75.png")}
          width="75px"
          label="Fact Check"
          counter="0"
        >
          The first thing to do when you hear something you think might be
          anti-semitic is to fact-check. Cross-check via search engines.
        </ActionContainer>
      </div>
      <ActionContainer
        width="90px"
        src={require("./megaphone75.png")}
        label="Challenge"
        counter="0"
      >
        Second, don't be silent. When you realize a fact is anti-semitic, be
        sure to challenge it.
      </ActionContainer>
      <ActionContainer
        width="98px"
        src={require("./heart.png")}
        label="Support"
        counter="0"
      >
        Finally, support. Be kind to the people who are affected by this hate
        speech and be a good ally.
      </ActionContainer>
      <h2 className={styles.header2}>How I Built This Article</h2>
      <p className={styles.intro2}>
        I built this article using React, P5.js, and D3.js. The animation with
        the population of anti-semitic people versus Jews was built with P5.js
        instance mode, and the graph was built with D3.js. The "how to take
        action" at the bottom of the page was built with CSS transitions. I used
        the intersection observer API to track whether one of the animations was
        in view, and to make it mobile responsive I created a custom function
        that used a media watcher to ascertain the screen size and adjust the
        content accordingly. For the graph, I used D3 to create the logic for
        the svg and React to render the svg, although for the axes and
        transitions I let D3 handle that using the useRef hook in React to give
        D3 direct access to the DOM. Overall, this project was a good way to
        learn how to use D3, integrate P5.js into a website, and continue to
        sharpen my react skills.
      </p>
      <PrevNext prev="/parakeet" next="/audiovisualizer" />
    </div>
  );
}
