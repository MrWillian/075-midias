import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100vh;
    gap: 20px;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-direction: column;
    width: 70vh;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vh;
    height: 50vh;
`;

export const Title = styled.h2`
    text-transform: uppercase;
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
