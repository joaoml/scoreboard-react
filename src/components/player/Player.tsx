import React from "react";
import Counter from "../counter/Counter";
import styles from "./Player.module.scss";

const Player = (props: { id: string, name: string, score: number, removePlayer: Function, changeScore: Function }) => {
    const {id, name, score, removePlayer, changeScore} = props;

    return (
        <div className={styles.player}>
            <span className={styles.details}>
                <button className={styles.remove} onClick={() => removePlayer(id)}>x</button>
                <span className={styles.name}>{name}</span>
            </span>

            <Counter
                score={score}
                changeScore={changeScore} />
        </div>
    );
}

export default Player;