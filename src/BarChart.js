import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import styles from "./AS.module.css";

let animationCount = 0;
let mediaCounter = 0;
const data = [
  { date: 2008, crimes: 1352 },
  { date: 2009, crimes: 1211 },
  { date: 2010, crimes: 1239 },
  { date: 2011, crimes: 1121 },
  { date: 2012, crimes: 927 },
  { date: 2013, crimes: 751 },
  { date: 2014, crimes: 901 },
  { date: 2015, crimes: 942 },
  { date: 2016, crimes: 1067 },
  { date: 2017, crimes: 1986 },
  { date: 2018, crimes: 1879 },
  { date: 2019, crimes: 2107 },
  { date: 2020, crimes: 2026 },
  { date: 2021, crimes: 2717 },
];

export default function BarChart(props) {
  //get the min and max with the extent function
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  function animationChange() {
    if (count > 0) {
      d3.select(barsRef.current)
        .selectAll("rect")
        .data(bars)
        .transition()
        .attr("y", (d) => d.y)
        .attr("height", (d) => d.height)
        .attr("fill", (d, i) => (i < 5 ? "rgb(150,150,150)" : "rgb(255,0,0)"))
        .duration(1200);
    }
    count++;
    animationCount++;
  }
  let observer = new IntersectionObserver(animationChange, options);

  //useEffect makes sure that the document has loaded before adding the intersection observer
  useEffect(() => {
    let target = document.querySelector("#barDiv");
    observer.observe(target);
  });

  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  //check to see if screen is narrow and update isNarrowScreen appropriately - set counter and change useeffect for axis to watch for the counter so that the axis won't happen before the isNarrowScreen call
  useEffect(() => {
    //set initial value
    const mediaWatcher = window.matchMedia("(max-width: 650px)");
    setIsNarrowScreen(mediaWatcher.matches);
    mediaCounter++;
  });

  useEffect(() => {
    let start = new Date(2008, 1, 1);
    let end = new Date(2021, 1, 1);

    //axis bottom is a bottom oriented axis, tickarguments give the arguments for the axis and tick format formats it as a date, and then the ticks gives the number
    const xAxis = d3
      .axisBottom()
      .tickArguments([d3.timeYear.range(start, end, 1)])
      .tickFormat(d3.format("d"))
      .scale(xAxisScale)
      .tickValues(
        !isNarrowScreen
          ? [
              "",
              2008,
              2009,
              2010,
              2011,
              2012,
              2013,
              2014,
              2015,
              2016,
              2017,
              2018,
              2019,
              2020,
              2021,
            ]
          : ["", 2008, 2010, 2012, 2014, 2016, 2018, 2020]
      )
      .ticks(12)
      .tickSizeOuter([0]);
    const yAxis = d3.axisLeft().scale(yScale).ticks(15);

    d3.select(xRef.current).call(xAxis);
    d3.select(yRef.current).call(yAxis);
  }, [mediaCounter]);

  const width = isNarrowScreen ? 400 : 650;
  const height = 520;
  const padding = 30;
  let count = 0;
  const extent = d3.extent(data, (d) => d.date);
  //use scaleTime to map time values to range, which goes up to width
  const xScale = d3
    .scaleTime()
    .domain(extent)
    .range([isNarrowScreen ? 65 : 80, width - 60]);

  const xAxisScale = d3
    .scaleTime()
    .domain([2007, 2022])
    .range([40, isNarrowScreen ? width - 42 : width - 20]);

  //get the min and mix with the extent function
  const [min, max] = d3.extent(data, (d) => d.crimes);
  //not time data - use scalelinear to map values to y range
  const yScale = d3
    .scaleLinear()
    .domain([0, max])
    .range([height - 20, padding]);

  //I think height scale could have gone either direction with the range - since it is not numbers you can't tell
  const heightScale = d3
    .scaleLinear()
    .domain([0, max])
    .range([0, height - 20 - padding]);

  const bars = data.map((d) => {
    return {
      x: xScale(d.date),
      y: yScale(d.crimes),
      height: heightScale(d.crimes),
    };
  });

  const xRef = useRef();
  const yRef = useRef();
  const barsRef = useRef();

  return (
    <svg width={width} height={height + 30}>
      {/* {bars.map((d, i) => {
        return (
          <rect
            x={d.x - 0}
            y={d.y}
            width="20"
            height={d.height}
            fill={i < 5 ? "rgb(150,150,150)" : "rgb(255,0,0)"}
          />
        );
      })} */}
      <g ref={barsRef}>
        {bars.map((d, i) => {
          return <rect key={i} x={d.x} width={isNarrowScreen ? 12.5 : 20} />;
        })}
      </g>
      <g ref={xRef} transform={`translate(10, 500)`} />
      <g ref={yRef} transform={`translate(50,0)`} />
      {isNarrowScreen ? (
        " "
      ) : (
        <text
          x="-250"
          y="115"
          className={styles.y}
          transform="rotate(270,0,100)"
        >
          Number of Hate Crimes
        </text>
      )}
      <text x={width / 2} y={height + 15} className={styles.x}>
        Years
      </text>
      <text x={width / 2} y="15" className={styles.t}>
        Hate Crimes By Year
      </text>
    </svg>
  );
}
