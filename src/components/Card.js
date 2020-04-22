import React from "react";
import CountUp from "react-countup";

import styles from "./card.module.css";

const Card = props => {
  const data = [
    {
      header: "Confirmed Cases",
      title: props.confirmed
    },
    {
      header: "Deaths",
      title: props.deaths
    },
    {
      header: "Recovered Cases",
      title: props.recovered
    }
  ];

  return (
    <div>
      {data.map(i => (
        <div className={styles.card}>
          <div className={styles.container}>
            <p>
              <h3>{i.header}</h3>
              <h4>{i.title}</h4>
              <h4>{console.log(i.title)}</h4>

              <CountUp start={0} end={i.title}>
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>
                      Reveal
                    </button>
                  </div>
                )}
              </CountUp>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
