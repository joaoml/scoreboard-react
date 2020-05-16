import React, { useState } from "react";
import styles from "./FormPlayer.module.scss";
import { ButtonTypeEnum } from "../button/ButtonTypeEnum";
import Button from "../button/Button";
import { ButtonKindEnum } from "../button/ButtonKindEnum";

const FormPlayer = ({ addPlayer }: { addPlayer: Function }) => {

    const [name, setName] = useState("");

    const handleValueName = (event: React.ChangeEvent<HTMLInputElement>): void => setName(event.currentTarget.value);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addPlayer(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formPlayer}>
            <input
                type="text"
                placeholder="Enter a player's name"
                value={name}
                onChange={handleValueName}
                className={styles.name}
                required
            />

            <Button
                label={"Add player"}
                type={ButtonTypeEnum.SUBMIT}
                kind={ButtonKindEnum.SECONDARY}
                handleClick={()=>{}}
                />
        </form>
    );
}

export default FormPlayer;