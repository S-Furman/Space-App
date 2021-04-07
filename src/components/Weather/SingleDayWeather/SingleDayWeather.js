import React from "react";
import styles from "./SingleDayWeather.module.css";
function SingleDayWeather(props) {
  return (
    <div className={[styles.blur, styles.data].join(" ")}>
      <p className={styles.p}>Sol: {props.sol}</p>
      <hr />
      <p className={styles.p}>Max temp: {props.minTemp}°C</p>
      <p className={styles.p}>Min temp: {props.maxTemp}°C</p>
    </div>
  );
}

export default SingleDayWeather;
