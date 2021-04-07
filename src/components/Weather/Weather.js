import React, { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import Mars from "../../assets/mars.jpg";
import SingleDayWeather from "./SingleDayWeather/SingleDayWeather";
import TodayWeather from "./TodayWeather/TodayWeather";

const getActualDayOnMars = () => {
  const actualTime = new Date();
  const daysFromStartOfCount = Math.round(actualTime / 1000 / 60 / 60 / 24);
  const correction = 15651;
  let actualSol = daysFromStartOfCount - correction;
  return actualSol;
};

const Weather = () => {
  const [dataFromApi, setDataFromApi] = useState({ data: [], loaded: false });
  useEffect(() => {
    const dayOnMars = getActualDayOnMars();
    const day1 = new Promise((resolve, error) => {
      resolve(
        fetch(
          "https://api.maas2.jiinxt.com/" + (dayOnMars - 6)
        ).then((response) => response.json())
      );
    });

    const day2 = new Promise((resolve, error) => {
      resolve(
        fetch(
          "https://api.maas2.jiinxt.com/" + (dayOnMars - 5)
        ).then((response) => response.json())
      );
    });

    const day3 = new Promise((resolve, error) => {
      resolve(
        fetch(
          "https://api.maas2.jiinxt.com/" + (dayOnMars - 4)
        ).then((response) => response.json())
      );
    });

    const day4 = new Promise((resolve, error) => {
      resolve(
        fetch(
          "https://api.maas2.jiinxt.com/" + (dayOnMars - 3)
        ).then((response) => response.json())
      );
    });

    const day5 = new Promise((resolve, error) => {
      resolve(
        fetch(
          "https://api.maas2.jiinxt.com/" + (dayOnMars - 2)
        ).then((response) => response.json())
      );
    });

    const day6 = new Promise((resolve, error) => {
      resolve(
        fetch(
          "https://api.maas2.jiinxt.com/" + (dayOnMars - 1)
        ).then((response) => response.json())
      );
    });

    const day7 = new Promise((resolve, error) => {
      resolve(
        fetch("https://api.maas2.jiinxt.com/" + dayOnMars).then((response) =>
          response.json()
        )
      );
    });
    Promise.all([day1, day2, day3, day4, day5, day6, day7])
      .then((value) => setDataFromApi({ data: value, loaded: true }))
      .catch((error) => console.log(error));
  }, []);

  let content = null;
  if (dataFromApi.loaded) {
    content = (
      <div>
        <img className={styles.marsImg} src={Mars} alt="Mars" />
        <TodayWeather
          sol={dataFromApi.data[0].sol}
          sunrise={dataFromApi.data[0].sunrise}
          sunset={dataFromApi.data[0].sunset}
          minTemp={dataFromApi.data[0].min_temp}
          maxTemp={dataFromApi.data[0].max_temp}
        />
        <div className={styles.weatherBoxesContainer}>
          {dataFromApi.data.slice(0, 6).map((day) => {
            return (
              <SingleDayWeather
                key={day.id}
                sol={day.sol}
                sunrise={day.sunrise}
                sunset={day.sunset}
                minTemp={day.min_temp}
                maxTemp={day.max_temp}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default Weather;
