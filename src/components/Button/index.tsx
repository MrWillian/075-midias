import React from "react";
import * as C from "./styles";

type Props = {
    text?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset",
    style?: React.CSSProperties
}

const Button: React.FC<Props> = ({ text, onClick, type = "button", style }) => {
    return (
        <C.Button type={type} onClick={onClick} style={style}>
            {text}
        </C.Button>
    );
}

export default Button;