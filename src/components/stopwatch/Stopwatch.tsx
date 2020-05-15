import React, { useState, useEffect } from "react";
import styles from "./Stopwatch.module.scss";

const Stopwatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleStopwatch = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const getElapsedTimeFormatted = (seconds: number): string => {


        const hours: number = Math.floor(seconds / 60 / 60);
        const minutes: number = (Math.floor(seconds / 60) % 60);
        const secs: number = Math.floor(seconds - minutes * 60);

        const formatted: string[] = [];

        if (hours) {
            formatted.push(`${hours.toString().padStart(2, "0")}h`);
        }

        if (minutes) {
            formatted.push(`${minutes.toString().padStart(2, "0")}m`);
        }

        formatted.push(`${secs}s`);

        return formatted.join(" ");
    }

    useEffect(() => {
        let id: number;
        if (isRunning) {
            id = window.setInterval(() => setSeconds(prevState => prevState += 1), 1000);
        }

        return () => clearInterval(id);
    }, [isRunning]);

    return (
        <div className={styles.stopwatch}>
            <div className={styles.title}>Stopwatch</div>
            <span className={styles.time}>{getElapsedTimeFormatted(seconds)}</span>
            <div className={styles.actions}>
                <button
                    className={`${styles.action} ${isRunning && styles.active}`}
                    onClick={handleStopwatch}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button
                    className={styles.action}
                    onClick={handleReset}>
                    Reset
                    </button>
            </div>
        </div>
    );
}

export default Stopwatch;