import React from "react";
import { IconType } from "react-icons/lib";
import * as C from "./styles";

type Props = {
    text?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset",
    style?: React.CSSProperties,
    Icon?: IconType,
    iconSize?: number,
    color?: string
}

const Button: React.FC<Props> = ({ 
    text, onClick, type = "button", style, Icon, iconSize, color
}) => {
    return (
        <C.Button 
            type={type} 
            onClick={onClick} 
            style={{
                ...style, 
                ...{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    padding: '10px',
                    backgroundColor: color
                }
            }}>
            {Icon ? <Icon size={iconSize} /> : text}
        </C.Button>
    );
}

export default Button;