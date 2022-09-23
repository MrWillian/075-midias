import React from 'react';
import * as C from "./styles";

type Props = {
    type?: React.HTMLInputTypeAttribute,
    name?: string,
    placeholder?: string,
    value?: string | number | readonly string[],
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

const Input: React.FC<Props> = ({ type, name, placeholder, value, onChange }) => {
    return (
        <C.Input
            value={value}
            name={name}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    );
}

export default Input;
