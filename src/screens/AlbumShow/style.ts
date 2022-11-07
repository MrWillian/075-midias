import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    background-color: #CCC;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0;
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
    width: 100vh;
    overflow-x: auto;
    white-space: nowrap;
    gap: 5px;
    padding: 10px;

    @media (max-width: 850px) {
        width: 90vh;
    }

    @media (max-width: 850px) and (max-width: 1100px) {
        width: 65vh;
    }

    @media (max-width: 950px) and (max-width: 1400px) {
        width: 65vh;
    }

    @media (max-width: 750px) {
        width: 80vh;
    }

    @media (max-width: 650px) {
        width: 65vh;
    }

    @media (max-width: 550px) {
        width: 50vh;
    }

    @media (max-width: 450px) {
        width: 40vh;
    }
`;

export const Image = styled.img`
    max-width: 50vw;
    max-height: 50vh;

    align-self: flex-start;
`;
