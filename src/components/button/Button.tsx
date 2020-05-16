import React from "react";
import styles from "./Button.module.scss";
import classNames from 'classnames/bind';
import { ButtonKindEnum } from "./ButtonKindEnum";
import { ButtonTypeEnum } from "./ButtonTypeEnum";
import { ButtonLevelEnum } from "./ButtonLevelEnum";

const cx = classNames.bind(styles);

const Button = ({
    label,
    handleClick,
    disabled = false,
    kind = ButtonKindEnum.PRIMARY,
    type = ButtonTypeEnum.BUTTON,
    level
}: {
    label: string,
    handleClick: Function,
    disabled?: boolean,
    kind?: ButtonKindEnum,
    type?: ButtonTypeEnum,
    level ?: ButtonLevelEnum
}) => {
    
    let buttonClass = cx({
        button: true,
        primary: kind === ButtonKindEnum.PRIMARY,
        secondary: kind === ButtonKindEnum.SECONDARY,
        unstyled: kind === ButtonKindEnum.UNSTYLED,
        danger: level === ButtonLevelEnum.DANGER
    });

    return (
        <button
            className={buttonClass}
            disabled={disabled}
            type={type}
            onClick={() => handleClick()}>
            {label}
        </button>
    );
}

export default Button;