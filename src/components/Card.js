import React from "react";

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
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
