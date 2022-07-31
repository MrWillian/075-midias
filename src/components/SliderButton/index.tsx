import React, { useEffect } from 'react';
import { Container } from "./style"

type Props = {
    moveSlide?: () => void;
    children: JSX.Element;
    style?: {}
}

const SliderButton: React.FC<Props> = ({ moveSlide, children, style }) => {
    return (
        <Container style={style} onClick={moveSlide}>
            {children}
        </Container>
    );
}

export default SliderButton;