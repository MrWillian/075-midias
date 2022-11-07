import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
    height: 100%; 
    width: 100%; 
    padding: 30px 0;

    @media screen and (max-width: 500px) {
        margin: 25px 0;
    }
`;

export const List = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
    background-color: #CCC;
    border-radius: 15px;
    padding: 10px 0;
    height: 50%; 
    width: 75%; 
    webkit-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
    moz-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
    gap: 20px;

    @media screen and (max-width: 600px) {
        width: 90%;
    }

    @media screen and (max-width: 500px) {
        width: 95%;
    }
`;

export const ItemContainer = styled.div`
    display: flex; 
    width: 80%; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    webkit-background-clip: padding-box;
    background-clip: padding-box;
`;

export const ButtonsActionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px 0;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
`;

export const NameLabel = styled.span`
    font-size: 22px;
    color: #000;
    font-weight: 900;

    @media screen and (max-width: 400px) {
        font-size: 18px;
    }
    
    @media screen and (max-width: 300px) {
        font-size: 12px;
    }
`;

export const DateLabel = styled.span`
    font-size: 18px;
    color: #000;
    font-weight: 900;
    
    @media screen and (max-width: 400px) {
        font-size: 14px;
    }

    @media screen and (max-width: 300px) {
        font-size: 8px;
    }
`;
