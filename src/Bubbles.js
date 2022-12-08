import React from "react";
import p5 from "p5";
import { useEffect } from "react";

export default function Bubbles(props) {
  let randArray = [];
  let animationCount = 0;
  let mediaCounter = 0;
  let mediaBool;
  //tie to shorter dimension of width/height ---- flip width and height in calculations, and before you draw anything rotate half pi
  let r = 110;
  let aArray = [3.6, 4.0, 4.5, 5, 6, 7.2, 8, 10.29];
  let aIndex = 0;
  let indexRand = 0;
  let outerIndex = 0;
  let outerRand = [];
  let totalIndex = [];
  let totalIndexCount = 0;
  let totalArray = [];
  let myCanvas;
  for (let i = 0; i < 532; i++) {
    totalIndex[i] = i;
  }
  function animationChange() {
    if (animationCount < 2) {
      animationCount++;
    }
  }

  //check to see if screen is narrow and update isNarrowScreen appropriately - set counter and change useeffect for axis to watch for the counter so that the axis won't happen before the isNarrowScreen call
  useEffect(() => {
    //set initial value
    const mediaWatcher = window.matchMedia("(max-width: 650px)");
    mediaBool = mediaWatcher.matches;
    mediaCounter++;
  });
  let options = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 1,
  };
  let observer = new IntersectionObserver(animationChange, options);

  useEffect(() => {
    let target = document.querySelector("#p5Container");
    observer.observe(target);
  });
  let yellow = [];
  useEffect(() => {
    let myP5 = new p5(Sketch);
  });

  const Sketch = (p5) => {
    p5.setup = () => {
      let widthDimension = p5.windowWidth / 2;
      let widthCanvas = mediaBool ? 350 : 600;
      let heightCanvas = mediaBool ? 500 : 250;
      myCanvas = p5.createCanvas(widthCanvas, heightCanvas);
      myCanvas.parent("p5Container");
      p5.background(245, 245, 245);
      //setting random values in randArray for all numbers in inner 7 rings
      for (let i = 0; i < 532 - 360 / aArray[0]; i++) {
        randArray[i] = (p5.random(-0.99, 0.99) * r) / 8;
      }

      //setting values in outerRand array for outer ring
      for (let i = 0; i < 360 / aArray[0]; i++) {
        outerRand[i] = (p5.random(0.2) * r) / 8;
      }
      //setting center of circle
      let cx = p5.width / 2;
      let cy = p5.height / 2;

      p5.background(245, 245, 245);
      p5.strokeWeight(4);

      //iterates through the outer ring array, one for each ring
      for (let i = 0; i < aArray.length; i++) {
        //iterates through 360 degrees, step in loop is based on number of dots in ring
        for (let a = 0; a < 360; a += aArray[aIndex]) {
          let angle = p5.radians(a);

          //if total dots is less than two (to save yellow dots)
          if (totalIndexCount < 2) {
            //makes coordinates around circle with aIndex representing each inner step of radius
            let x =
              cx + p5.cos(angle) * (r + r * aIndex) - outerRand[outerIndex];
            let y =
              cy + p5.sin(angle) * (r + r * aIndex) - outerRand[outerIndex];

            //make yellow data points, set their color to yellow and show them
            yellow[totalIndexCount] = new dataPoint(x, y);
            yellow[totalIndexCount].setColor(191, 57, 184, 255);
            yellow[totalIndexCount].setStrokeWeight(3);
            yellow[totalIndexCount].show();
            outerIndex++;

            //for rest of outer ring
          } else if (totalIndexCount < 100) {
            p5.push();
            let x =
              cx + p5.cos(angle) * (r + r * aIndex) - outerRand[outerIndex];
            let y =
              cy + p5.sin(angle) * (r + r * aIndex) - outerRand[outerIndex];

            //add the dots to the overall array
            totalArray[totalIndexCount - 2] = new dataPoint(x, y);
            totalArray[totalIndexCount - 2].setColor(191, 57, 184, 255);
            totalArray[totalIndexCount - 2].setStrokeWeight(3);
            totalArray[totalIndexCount - 2].show();

            //add to the outer index for the random numbers on the outside of the circle
            outerIndex++;
          } else {
            p5.push();
            p5.stroke(191, 57, 184, 255);

            //get point coordinates subtracting from the radius and also using higher erandom number interval
            let x2 =
              cx +
              p5.cos(angle) * (r - (r * aIndex) / aArray.length) -
              randArray[indexRand];
            let y2 =
              cy +
              p5.sin(angle) * (r - (r * aIndex) / aArray.length) -
              randArray[indexRand];

            //add to the total array
            totalArray[totalIndexCount - 2] = new dataPoint(x2, y2);
            totalArray[totalIndexCount - 2].setStrokeWeight(3);
            totalArray[totalIndexCount - 2].show();
            indexRand++;
          }
          totalIndexCount++;
        }
        aIndex++;
      }

      //sort array by x values
      totalArray = totalArray.sort(function (a, b) {
        return a.x - b.x;
      });
      for (let i = 0; i < 72; i++) {
        let circleCoord;
        if (mediaBool) {
          circleCoord = randCircleCoordinate(
            50,
            0.5,
            p5.width / 2,
            p5.height / 7
          );
        } else {
          circleCoord = randCircleCoordinate(
            50,
            0.5,
            p5.width / 5,
            p5.height / 2 - 13
          );
        }
        totalArray[i].setSecondCircle(circleCoord.x, circleCoord.y);
      }
      for (let i = 72; i < totalArray.length; i++) {
        let circleCoord = randCircleCoordinate(
          80,
          0.5,
          p5.width / 2,
          p5.height / 2 - 13
        );
        totalArray[i].setSecondCircle(circleCoord.x, circleCoord.y);
      }
      for (let i = 0; i < yellow.length; i++) {
        let circleCoord;
        if (mediaBool) {
          circleCoord = randCircleCoordinate(
            8,
            0.5,
            p5.width / 2,
            p5.height / 1.4
          );
        } else {
          circleCoord = randCircleCoordinate(
            8,
            0.5,
            p5.width / 1.25,
            p5.height / 2 - 13
          );
        }
        yellow[i].setSecondCircle(circleCoord.x, circleCoord.y);
      }
    };

    let timeCount = 0;
    let currentTime = 0;

    p5.draw = () => {
      if (animationCount == 2) {
        if (timeCount == 0) {
          currentTime = Date.now();
          timeCount++;
        }
        const futureTime = Date.now();
        p5.background(245, 245, 245);
        p5.push();
        p5.stroke(0);
        for (let i = 0; i < yellow.length; i++) {
          p5.stroke(0, 0, 255, 255);
          yellow[i].show();
        }
        for (let i = 0; i < 72; i++) {
          p5.stroke(255, 0, 0, 249.9);
          totalArray[i].show();
        }
        for (let i = 72; i < totalArray.length; i++) {
          p5.stroke(191, 57, 184, 255);
          totalArray[i].show();
        }
        let deltaTime = futureTime - currentTime;
        if (futureTime - currentTime > 2500) {
          p5.background(245, 245, 245);
          for (let i = 0; i < 72; i++) {
            p5.stroke(255, 0, 0, 249.9);
            totalArray[i].show2();
          }
          for (let i = 72; i < totalArray.length; i++) {
            p5.stroke(191, 57, 184, 255);
            totalArray[i].show2();
          }
          for (let i = 0; i < yellow.length; i++) {
            p5.stroke(0, 0, 255, 255);
            yellow[i].show2();
          }
          p5.push();
          p5.fill(0);
          p5.strokeWeight(0);
          let label1;
          let label2;
          let label3;
          if (mediaBool) {
            label1 = p5.text(
              "Anti-Semitic: 1.09B",
              p5.width / 2 - 35,
              p5.height / 7 + 69
            );
            label2 = p5.text(
              "Non-Anti-Semitic: 3B",
              p5.width / 2 - 40,
              p5.height / 2 + 85
            );
            label3 = p5.text(
              "Jewish: 15M",
              p5.width / 2 - 28,
              p5.height / 1.4 + 35
            );
          } else {
            label1 = p5.text("Jewish: 15M", p5.width / 1.37, 217);
            label2 = p5.text("Anti-Semitic: 1.09B", p5.width / 9, 217);
            label3 = p5.text("Non-Anti-Semitic: 3B", p5.width / 2.4, 217);
          }
          p5.pop();
        }
      }
    };
    class dataPoint {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vector = p5.createVector(this.x, this.y);
      }
      setColor(r, g, b, a) {
        p5.push();
        p5.stroke(r, g, b, a);
      }
      setStrokeWeight(num) {
        p5.push();
        p5.strokeWeight(num);
        p5.pop();
      }
      show() {
        p5.point(this.x, this.y);
      }
      setSecondCircle(x2, y2) {
        this.x2 = x2;
        this.y2 = y2;
        this.vector2 = p5.createVector(this.x2, this.y2);
      }
      show2() {
        let step = p5.random(0.02, 0.07);
        // for (i = 0; i <=1; i+= step) {
        this.v3X = p5.lerp(this.vector.x, this.vector2.x, step);
        this.v3Y = p5.lerp(this.vector.y, this.vector2.y, step);

        p5.point(this.v3X, this.v3Y);
        this.vector = p5.createVector(this.v3X, this.v3Y);
        p5.pop();
        // }
      }
    }

    function randCircleCoordinate(scale, weight, centerX, centerY) {
      // Weight can make points closer to edge (0) or center (>1)
      // random radians
      let randRads = p5.random(0, p5.TWO_PI);
      // https://twitter.com/incre_ment/status/1453728837829681155
      // float radius = P.sqrt(P.p.random(1));
      // from: https://codepen.io/bit-101/pen/mQBJgM?editors=0010
      let randRadius = Math.pow(p5.random(1), weight);
      let circleVect = p5.createVector(
        Math.cos(randRads) * randRadius * scale + centerX,
        Math.sin(randRads) * randRadius * scale + centerY
      );
      return circleVect;
    }
  };

  return <></>;
}
