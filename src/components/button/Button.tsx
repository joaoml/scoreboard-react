import React from "react";
import styles from "./Button.module.scss";
import classNames from 'classnames/bind';
import { ButtonTypeEnum } from "./ButtonTypeEnum";

const cx = classNames.bind(styles);

const Button = ({
    label,
    handleClick,
    disabled = false,
    kind = ButtonTypeEnum.primary
}: {
    label: string,
    handleClick: Function,
    disabled?: boolean,
    kind?: ButtonTypeEnum
}) => {
    
    let buttonClass = cx({
        button: true,
        primary: kind === ButtonTypeEnum.primary,
        secondary: kind === ButtonTypeEnum.secondary
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