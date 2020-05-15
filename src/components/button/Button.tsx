import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, handleClick, isDisabled = false }: { label: string, handleClick: Function, isDisabled?: boolean }) => {
    return (
        <button
            className={styles.button}
            disabled={isDisabled}
            onClick={() => handleClick()}>
            {label}
        </button>
    );
}

export default Button;