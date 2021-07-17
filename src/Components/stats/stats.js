import React from "react";
// import styles from "./Stats.module.css";

const Stats = ({ stats: { good, neutral, bad }, total, getPercent }) => {
  return (
    <>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <div>
        <p>Total: {total}</p>
        <p>Positiv percentage: {getPercent} %</p>
      </div>
    </>
  );
};

export default Stats;
