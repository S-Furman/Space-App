import singleDayStyles from "../SingleDayWeather/SingleDayWeather.module.css";
import styles from "./TodayWeather.module.css";
import { useSpring, animated } from "react-spring";
import { FetchedData } from "../interfaces/IFetchedData";

const TodayWeather = (props: FetchedData) => {
  return (
    <animated.article
      style={useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })}
      className={[singleDayStyles.blur, styles.mainFrame].join(" ")}
    >
      <header className={styles.description}>
        Data is collected daily from Curiosity Rover on Mars.
      </header>
      <p className={styles.p}>Sol: {props.sol}</p>
      <hr />
      <div className={styles.flex}>
        <section className={styles.box1}>
          <p className={styles.p}>Sunrise: {props.sunrise}</p>
          <p className={styles.p}>Min temp: {props.max_temp}°C</p>
        </section>
        <section className={styles.box2}>
          <p className={styles.p}>Sunset: {props.sunset}</p>
          <p className={styles.p}>Max temp: {props.min_temp}°C</p>
        </section>
      </div>
    </animated.article>
  );
};

export default TodayWeather;
