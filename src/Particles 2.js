import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

export default function Particles() {
  const ringsNumber = 25;
  const geometryRef = useRef();

  const particlesCount = 10000;
  const verticesCount = 5;

  //create area to deal with react
  const positionsArray = [];
  const colorsArray = [];
  //   for each ring
  useMemo(() => {
    for (let i = 0; i < ringsNumber; i++) {
      //declare positions and colors array for custom geometry
      positionsArray[i] = new Float32Array(particlesCount * 3);

      //for each particle, x, y, z -- math.pi is used for angle, 2pi is a full circle
      for (let j = 0; j < particlesCount * 3; j += 3) {
        positionsArray[i][j] =
          0 + 4 * Math.cos((2 * Math.PI * (100 - j / 3)) / 100);
        positionsArray[i][j + 1] =
          4 * Math.sin((2 * Math.PI * (100 - j / 3)) / 100);
        positionsArray[i][j + 2] = -3 + i;
      }
    }
    return positionsArray;
  });
  //same thing for colors, usememo is used to cache value
  useMemo(() => {
    for (let i = 0; i < ringsNumber; i++) {
      colorsArray[i] = new Float32Array(particlesCount * 3);
      for (let j = 0; j < particlesCount * 3; j += 3) {
        colorsArray[i][j] = 8 / 255;
        colorsArray[i][j + 1] = (163 - 0.002 * i) / 255;
        colorsArray[i][j + 2] = (140 - i * 1.5) / 255;
      }
    }
    return colorsArray;
  });

  return (
    <>
      {positionsArray.map((array, index) => {
        let color = colorsArray[index];
        return (
          <points>
            <bufferGeometry>
              <bufferAttribute
                attach={"attributes-position"}
                count={particlesCount}
                itemSize={3}
                array={array}
              />
            </bufferGeometry>
            <pointsMaterial size={0.5} color="#08A386" />
          </points>
        );
      })}
    </>
  );
}
