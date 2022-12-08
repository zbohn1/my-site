import { useThree, extend, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Particles from "./Particles.js";
import React, { useContext } from "react";
import { Context } from "./Context";

extend({ OrbitControls });

export default function Experience() {
  const { animationPresent, setAnimationPresent } = useContext(Context);
  const rocket = useGLTF("./rocket.gltf");
  const { camera, gl } = useThree();

  const cubeRef = useRef();
  const groupRef = useRef();
  const rocketRef = useRef();
  let scrollY = 0;
  let deltaY = 0;
  let height = Math.round(window.innerHeight / 100);
  let height2 = Math.round(window.innerHeight * 0.5);
  let deltaPosition = 0;
  let deltaPositionHelper1 = 0;
  let deltaPositionHelper2 = 0;
  let changeCounter = 0;
  let classListCounter = 0;
  let experienceRemoveCounter = 0;
  let animationCounter = 0;
  let scrollX = 0;
  let deltaX = 0;

  camera.position.z = 40;
  camera.position.y = 0;
  camera.position.x = 0;
  camera.rotationX = 0;
  camera.rotation.z = 0;
  camera.rotation.y = 0;
  camera.rotation.isEuler = false;
  camera.rotation.x = 0;
  camera.fov = 60;
  camera.near = 1;
  camera.far = 3000;
  camera.aspect = window.innerWidth / window.innerHeight;

  let webContent = document.querySelector("#web-content");
  webContent.style.opacity = "0";

  useFrame((state, delta) => {
    if (rocketRef) {
      webContent.style.opacity = "1";
    }
    if (rocket && scrollY < 1.5 && scrollY >= 0) {
      rocketRef.current.rotation.x = -scrollY;
    }

    if (rocket && scrollY >= 1.5) {
      // rocketRef.current.position.z += 0.25 * -deltaY;
      rocketRef.current.position.z += 0.25 * -scrollY;
      // camera.position.z += 0.25 * -deltaY;
      camera.position.z += 0.25 * -scrollY;
    }

    if (rocket && rocketRef.current.position.z < -12) {
      rocketRef.current.position.z = -300;
      document.body.style.overflow = "scroll";
      document.body.classList.remove("no-scroll");
    }
    if (rocket && rocketRef.current.position.z <= 0) {
      deltaPositionHelper2 = rocketRef.current.position.z;
      if (deltaPositionHelper2 - deltaPositionHelper1 != 0) {
        changeCounter = 1;
      }
      deltaPosition += -(deltaPositionHelper2 - deltaPositionHelper1);
    }
    if (
      rocketRef.current.position.z <= 0 &&
      changeCounter == 1 &&
      rocketRef.current.position.z > -12
    ) {
      let webContent = document.getElementById("web-content");
      height += deltaPosition * 0.1;
      webContent.style.clipPath =
        "circle(" + height + "% at 50% " + height2 + "px)";
    }

    if (rocketRef.current.position.z <= -12) {
      let webContent = document.getElementById("web-content");
      webContent.style.clipPath = "none";
    }

    if (rocket && scrollY > 1.5 && classListCounter == 0) {
      let text = document.querySelector("#text");
      text.classList.add("fade-out-section");
      classListCounter++;
    }

    if (rocketRef.current.position.z < -13) {
      setAnimationPresent(false);
    }

    deltaY = 0;
    deltaX = window.scrollY;
    changeCounter = 0;
    deltaPositionHelper1 = rocketRef.current.position.z;
    animationCounter++;
    scrollY += 0.01;
  });

  return (
    <>
      <primitive
        object={rocket.scene}
        scale={0.02}
        position={[0, 0, 30]}
        ref={rocketRef}
      />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Particles />
    </>
  );
}
