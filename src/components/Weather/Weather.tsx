import { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import SingleDayWeather from "./SingleDayWeather/SingleDayWeather";
import TodayWeather from "./TodayWeather/TodayWeather";
import { FetchedData } from "./interfaces/IFetchedData";

const getActualDayOnMars = () => {
  const actualTime = new Date().valueOf();
  const daysFromStartOfCount = Math.round(actualTime / 1000 / 60 / 60 / 24);

  const correction = 15671;
  let actualSol = daysFromStartOfCount - correction;
  return actualSol;
};

const Weather = () => {
  const [dataFromApi, setDataFromApi] = useState<{
    data: FetchedData[];
    loaded: boolean;
  }>({ data: [], loaded: false });

  useEffect(() => {
    const dayOnMars = getActualDayOnMars();

    // const fetchedData = [];
    // for (let i = 6; i >= 0; i--) {
    //   fetch("https://api.maas2.jiinxt.com/" + (dayOnMars - i))
    //     .then((response) => response.json())
    //     .then((data) => setDataFromApi((prev) => ({ ...prev, data: data })))
    //     // fetchedData.push(data))
    //     .catch((error) => console.log(error));
    // }
    // setDataFromApi({ data: fetchedData, loaded: true });

    const day1 = fetch(
      "https://api.maas2.jiinxt.com/" + (dayOnMars - 6)
    ).then((response) => response.json());

    const day2 = fetch(
      "https://api.maas2.jiinxt.com/" + (dayOnMars - 5)
    ).then((response) => response.json());

    const day3 = fetch(
      "https://api.maas2.jiinxt.com/" + (dayOnMars - 4)
    ).then((response) => response.json());

    const day4 = fetch(
      "https://api.maas2.jiinxt.com/" + (dayOnMars - 3)
    ).then((response) => response.json());

    const day5 = fetch(
      "https://api.maas2.jiinxt.com/" + (dayOnMars - 2)
    ).then((response) => response.json());

    const day6 = fetch(
      "https://api.maas2.jiinxt.com/" + (dayOnMars - 1)
    ).then((response) => response.json());

    const day7 = fetch(
      "https://api.maas2.jiinxt.com/" + dayOnMars
    ).then((response) => response.json());

    Promise.all([day1, day2, day3, day4, day5, day6, day7])
      .then((values) => setDataFromApi({ data: values, loaded: true }))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className={styles.weatherContainer}>
      {dataFromApi.loaded ? (
        <>
          <TodayWeather
            sol={dataFromApi.data[6].sol}
            sunrise={dataFromApi.data[6].sunrise}
            sunset={dataFromApi.data[6].sunset}
            min_temp={dataFromApi.data[6].min_temp}
            max_temp={dataFromApi.data[6].max_temp}
          />
          <section className={styles.weatherBoxesContainer}>
            {dataFromApi.data.slice(0, 6).map((day, index) => {
              return (
                <SingleDayWeather
                  key={index}
                  sol={day.sol}
                  sunrise={day.sunrise}
                  sunset={day.sunset}
                  min_temp={day.min_temp}
                  max_temp={day.max_temp}
                />
              );
            })}
          </section>
        </>
      ) : null}
    </main>
  );
};

export default Weather;
