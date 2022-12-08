import Header from "./Header";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import FirstContent from "./FirstContent";
import Divider from "./Divider.js";
import ProjectSection from "./ProjectSection";
import styles from "./App.module.css";
import React, { useContext } from "react";
import { Context } from "./Context";

import "./fonts/Bogart-Alt-Medium.ttf";
import "./fonts/Biotif-Regular.ttf";
import "./fonts/Biotif-Bold.ttf";
import "./fonts/Helvetica Neue Medium Extended.ttf";
import "./fonts/Helvetica Neue UltraLight.ttf";
import { useThree, extend, useFrame, Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import * as THREE from "three";

let height = Math.round(window.innerHeight / 600);
console.log(height);
let height2 = Math.round(window.innerHeight * 0.5);
let cssProperty = {
  clipPath: "circle(" + 0 + "% at 50% " + height2 + "px)",
};

function App(props) {
  const { animationPresent, setAnimationPresent } = useContext(Context);

  return (
    <div>
      {animationPresent && (
        <div className={styles.App}>
          <Canvas
            id="sceneDom"
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputEncoding: THREE.sRGBEncoding,
            }}
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [3, 2, 6],
            }}
          >
            <Experience id="experience" />
          </Canvas>
          <h2 id="text" className={styles.visible}>
            Welcome to my portfolio!
          </h2>
        </div>
      )}
      <div id="web-content" style={animationPresent ? cssProperty : null}>
        <GlobalStyles />
        <Header color="#f5f5f5" />
        <FirstContent />
        <Divider />
        <ProjectSection />
      </div>
    </div>
  );
}

export default App;
