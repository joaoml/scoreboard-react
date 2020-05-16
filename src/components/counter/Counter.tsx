import React from "react";
import styles from "./Counter.module.scss";

const Counter = ({ score, changeScore }: { score: number, changeScore: Function }) => {

    return (
        <div className={styles.counter}>
            <button
                className={`${styles.action} ${styles.decrement}`}
                onClick={() => changeScore(-1)}>-</button>
            <span className="score">{score}</span>
            <button
                className={`${styles.action} ${styles.increment}`}
                onClick={() => changeScore(1)}>+</button>
        </div>
    );
}

export default Counter;