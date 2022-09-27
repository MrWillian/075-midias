import React from "react";
import { IconType } from "react-icons/lib";
import * as C from "./styles";

type Props = {
    text?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset",
    style?: React.CSSProperties,
    Icon?: IconType
}

const Button: React.FC<Props> = ({ text, onClick, type = "button", style, Icon }) => {
    return (
        <C.Button type={type} onClick={onClick} style={style}>
            {Icon ? <Icon /> : text}
        </C.Button>
    );
}

export default Button;