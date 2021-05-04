import React, { useState, useEffect } from "react";
import styles from "./ISSChecker.module.css";
import NextFlightCounter from "./NextFlightCounter/NextFlightCounter";

const ISSChecker = () => {
  const [fetchedData, setFetchedData] = useState({
    data: 0,
    dataLoaded: false,
  });
  useEffect(() => {
    fetch(
      "https://evening-woodland-62164.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=50.575&lon=19.32"
    )
      .then((response) => response.json())
      .then((fetchedData) =>
        setFetchedData({
          data: fetchedData.response[0].risetime,
          dataLoaded: true,
        })
      );
  }, []);
  return (
    <main>
      <section className={styles.firstVh}>
        {fetchedData.dataLoaded ? (
          <NextFlightCounter
            time={new Date(fetchedData.data * 1000).getTime()}
          />
        ) : null}
      </section>
      <section className={styles.secondVh}></section>
    </main>
  );
};

export default ISSChecker;
