import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;

    @media screen and (max-width: 1250px) {
        flex-direction: column;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-direction: column;
    width: 70vh;

    @media screen and (max-width: 700px) {
        width: auto;
    }

    @media screen and (max-width: 600px) {
        padding: 25px;
    }

`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vh;
    height: 50vh;

    @media screen and (max-width: 700px) {
        width: 60vh;
        height: 40vh;   
    }

    @media screen and (max-width: 600px) {
        width: 55vh;
        height: 35vh;
    }

    @media screen and (max-width: 500px) {
        width: 45vh;
        height: 30vh;
    }
    
    @media screen and (max-width: 400px) {
        width: 40vh;
        height: 20vh;   
    }

`;

export const Title = styled.h2`
    text-transform: uppercase;

    @media screen and (max-width: 700px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 900px) and (max-height: 600px) {
        font-size: 1.2rem;
    }
`;

export const Line = styled.hr`
    width: 70px;
    height: 2px;
    border: solid 2px #C75104;
    margin: 0 0 0.7rem 0;
`;

export const Content = styled.text`
    font-size: 2rem;
    margin: 0.5rem 0;

    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 900px) and (max-height: 600px) {
        font-size: 1rem;
    }
`;

export const ContactLink = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;
    color: #C75104;
    text-decoration: underline;
    text-decoration-color: #C75104;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
