import React, { useState, useEffect } from "react";
import styles from "./NextFlightCounter.module.css";

import { useSpring, animated } from "react-spring";

const NextFlightCounter = (props) => {
  const actualDate = new Date();
  const remainingTimeInSec =
    (props.time.getTime() - actualDate.getTime()) / 1000;
  const hours = Math.floor((remainingTimeInSec % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((remainingTimeInSec % (60 * 60)) / 60);
  const seconds = Math.floor(remainingTimeInSec % 60);

  const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  const [remainingMinutes, setRemainingMinutes] = useState(minutes);
  const [remainingHours, setRemainingHours] = useState(hours);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setRemainingSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(interval);
          } else {
            setRemainingHours(hours - 1);
            setRemainingMinutes(59);
          }
        } else {
          setRemainingMinutes(minutes - 1);
          setRemainingSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const propos = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <>
      <animated.header style={propos} className={styles.mainInfo}>
        <h1 className={styles.h1}>Next ISS pass above your home in:</h1>

        {remainingTimeInSec > 0 ? (
          <section className={styles.timeContainer}>
            <p className={styles.numbers}>{remainingHours}</p>
            <p className={styles.numbers}>:</p>
            <p className={styles.numbers}>{remainingMinutes}</p>
            <p className={styles.numbers}>:</p>
            <p className={styles.numbers}>{remainingSeconds}</p>
          </section>
        ) : (
          <p className={styles.numbers}>No data available</p>
        )}
      </animated.header>
    </>
  );
};

export default NextFlightCounter;
