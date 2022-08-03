import React from "react";
import * as C from "./styles";

type Props = {
    text?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<Props> = ({ text, onClick, type = "button" }) => {
    return (
        <C.Button type={type} onClick={onClick}>
            {text}
        </C.Button>
    );
}

export default Button;