import styles from "./SingleDayWeather.module.css";
import { FetchedData } from "../interfaces/IFetchedData";

function SingleDayWeather(props: FetchedData) {
  return (
    <article className={[styles.blur, styles.data].join(" ")}>
      <header className={styles.p}>Sol: {props.sol}</header>
      <hr />
      <p className={styles.p}>Max temp: {props.min_temp}°C</p>
      <p className={styles.p}>Min temp: {props.max_temp}°C</p>
    </article>
  );
}

export default SingleDayWeather;
