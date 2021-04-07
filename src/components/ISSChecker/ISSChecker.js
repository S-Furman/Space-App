import React, { useState, useEffect } from "react";
import styles from "./ISSChecker.module.css";
import Timer from "./NextFlightCounter/NextFlightCounter";

const ISSChecker = () => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    dataLoaded: false,
  });
  useEffect(() => {
    fetch(
      "https://evening-woodland-62164.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=50.575&lon=19.32"
    )
      .then((response) => response.json())
      .then((fetchedData) =>
        setFetchedData({ data: fetchedData, dataLoaded: true })
      );
  }, []);

  let loadedData = null;
  if (fetchedData.dataLoaded) {
    let newest = new Date(fetchedData.data.response[0].risetime * 1000);
    loadedData = (
      <main>
        <div className={styles.firstVh}>
          <Timer time={newest}></Timer>
        </div>

        <div className={styles.secondVh}></div>
      </main>
    );
  }

  return <React.Fragment>{loadedData}</React.Fragment>;
};

export default ISSChecker;
