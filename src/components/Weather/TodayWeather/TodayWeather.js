import React from "react";
import singleDayStyles from "../SingleDayWeather/SingleDayWeather.module.css";
import styles from "./TodayWeather.module.css";
const TodayWeather = (props) => {
  return (
    <div className={[singleDayStyles.blur, styles.mainFrame].join(" ")}>
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
    </div>
  );
};

export default TodayWeather;
