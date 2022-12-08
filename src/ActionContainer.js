import styles from "./AS.module.css";
import { useRef, useState, useEffect } from "react";

let scrollY = 0;
export default function ActionContainer({
  src,
  label,
  width,
  children,
  counter,
}) {
  let count = parseInt(counter);
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };
  function animationChange() {
    //set the count greater than zero because intersection observer fires function the first time it is called
    if (count > 0) {
      setScrolled(true);
      console.log("scrolled run");
    }
    count++;
  }
  let observer = new IntersectionObserver(animationChange, options);
  //useEffect makes sure that the document has loaded before adding the intersection observer
  useEffect(() => {
    let target = document.querySelector("#actionDiv");
    observer.observe(target);
  });

  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled);

  return (
    <div
      className={[
        styles.actioncontainer,
        scrolled ? styles.actioncontainer2 : " ",
      ].join(" ")}
    >
      <img src={src} width={width} className="check-icon"></img>
      <div className={styles.textcontainer}>
        <h2 className={styles.label}>{label}</h2>
        <p className={styles.actionAdvice}>{children}</p>
      </div>
    </div>
  );
}
