import React from "react";
import { IPlayer } from "../player/IPlayer";
import styles from "./Stats.module.scss";

const Stats = ({players}: { players: IPlayer[] }) => {

    const totalPlayers: number = players.length;
    const totalScore: number = players.reduce((sum: number, player) => sum += player.score, 0);

    return (
        <table className={styles.stats}>
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalScore}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;