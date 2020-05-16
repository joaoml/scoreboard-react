import React from "react";
import Counter from "../counter/Counter";
import styles from "./Player.module.scss";
import Button from "../button/Button";
import { ButtonKindEnum } from "../button/ButtonKindEnum";
import { ButtonLevelEnum } from "../button/ButtonLevelEnum";

const Player = (props: { id: string, name: string, score: number, removePlayer: Function, changeScore: Function }) => {
    const { id, name, score, removePlayer, changeScore } = props;

    return (
        <div className={styles.player}>
            <span className={styles.details}>
                <div className={styles.remove}>
                <Button
                    label={"x"}
                    kind={ButtonKindEnum.UNSTYLED}
                    level={ButtonLevelEnum.DANGER}
                    handleClick={() => removePlayer(id)} />
                </div>
                <span className={styles.name}>{name}</span>
            </span>

            <Counter
                score={score}
                changeScore={changeScore} />
        </div>
    );
}

export default Player;