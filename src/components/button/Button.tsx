import React from "react";
import styles from "./Button.module.scss";
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Button = ({
    label,
    handleClick,
    disabled = false,
    kind = 'primary'
}: {
    label: string,
    handleClick: Function,
    disabled?: boolean,
    kind?: string
}) => {
    
    let buttonClass = cx({
        button: true,
        primary: kind === 'primary',
        secondary: kind === 'secondary'
    });

    return (
        <button
            className={buttonClass}
            disabled={disabled}
            onClick={() => handleClick()}>
            {label}
        </button>
    );
}

export default Button;