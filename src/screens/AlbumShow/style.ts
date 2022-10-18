import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 3rem 0;

    background-color: #CCC;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 24px;
    color: #000000;
`;

export const Description = styled.h2`
    font-size: 20px;
    margin-bottom: 5px;
`;

export const Date = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
    text-decoration: underline;
`;

export const ImagesContainer = styled.div`
    width: 80em;
    overflow-x: auto;
    white-space: nowrap;

    // @media (max-width: 3300px) {
    //     width: 150em;
    // }

    // @media (min-width: 3000px) {
    //     width: 130em;
    // }

    // @media (max-width: 2900px) {
    //     width: 100em;
    // }
`;

export const Image = styled.img`
    max-width: 50vw;
    max-height: 50vh;

    align-self: flex-start;
    // @media (max-width: 1100px) {
    //     max-width: 35vw;
    //     max-height: 35vh;
    // }

    // @media (max-width: 1000px) {
    //     max-width: 30vw;
    //     max-height: 30vh;
    // }

    // @media (max-width: 850px) {
    //     max-width: 25vw;
    //     max-height: 25vh;
    // }

    // @media (max-width: 750px) {
    //     max-width: 20vw;
    //     max-height: 20vh;
    // }
`;
