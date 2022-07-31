import styled from "styled-components";

export const Container = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(241, 241, 241, 0.5);
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 10px;

    top: 50%;
    transform: translateY(-60%);
`;