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

export const HeaderFormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
    
export const Title = styled.h2`
    display: flex;
`;

export const Line = styled.hr`
    width: 70px;
    height: 2px;
    border: solid 2px #C75104;
    margin: 0 -1.5rem 0 0;
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
`;
