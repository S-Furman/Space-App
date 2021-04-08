import React from "react";
import singleDayStyles from "../SingleDayWeather/SingleDayWeather.module.css";
import styles from "./TodayWeather.module.css";
import { useSpring, animated } from "react-spring";
const TodayWeather = (props) => {
  const propos = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    <animated.div
      style={propos}
      className={[singleDayStyles.blur, styles.mainFrame].join(" ")}
    >
      <p className={styles.description}>
        Data is collected daily from Curiosity Rover on Mars.
      </p>
      <p className={styles.p}>Sol: {props.sol}</p>
      <hr />
      <div className={styles.flex}>
        <div className={styles.box1}>
          <p className={styles.p}>Sunrise: {props.sunrise}</p>
          <p className={styles.p}>Min temp: {props.maxTemp}°C</p>
        </div>
        <div className={styles.box2}>
          <p className={styles.p}>Sunset: {props.sunset}</p>
          <p className={styles.p}>Max temp: {props.minTemp}°C</p>
        </div>
      </div>
    </animated.div>
  );
};

export default TodayWeather;
