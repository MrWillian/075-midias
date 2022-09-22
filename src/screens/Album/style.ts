import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 20px;

    background-color: #CCC;
`;

export const Title = styled.h2`
`;

export const Line = styled.hr`
    width: 70px;
    height: 2px;
    border: solid 2px #C75104;
    margin: -1.5rem -1.0rem 0 0;
`;

export const Form = styled.form`
    min-width: 50%;
    min-height: 50%;
`;

export const WhiteSpace = styled.div`
    margin: 1rem;
`;

export const PhotosContainer = styled.div`
    min-width: 25%;
    min-height: 50%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: -3.0rem
`;