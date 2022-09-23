import styled from "styled-components";

export const Container = styled.div`
    max-width: 300px;
    height: 200px;
    margin: 0rem auto 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Slider = styled.div`
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity ease-in-out 0.4s;
`;