import React from "react";
import styles from "./SingleDayWeather.module.css";
function SingleDayWeather(props) {
  return (
    <article className={[styles.blur, styles.data].join(" ")}>
      <header className={styles.p}>Sol: {props.sol}</header>
      <hr />
      <p className={styles.p}>Max temp: {props.minTemp}°C</p>
      <p className={styles.p}>Min temp: {props.maxTemp}°C</p>
    </article>
  );
}

export default SingleDayWeather;
