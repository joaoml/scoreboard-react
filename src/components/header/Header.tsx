import React from "react";
import Stats from "../stats/Stats";
import { IPlayer } from "../player/IPlayer";
import Stopwatch from "../stopwatch/Stopwatch";
import styles from "./Header.module.scss";

const Header = ({title, players}: { title: string; players: IPlayer[] }) => {
    return (
        <header className={styles.header}>
            <Stats players={players}/>
            <h1 className={styles.title}>{title}</h1>
            <Stopwatch />
        </header>
    );
}

export default Header;