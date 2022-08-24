import React from 'react';
import * as C from "./styles";

type Props = {
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    value?: string | number | readonly string[],
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

const Input: React.FC<Props> = ({ type, placeholder, value, onChange }) => {
    return (
        <C.Input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    );
}

export default Input;
