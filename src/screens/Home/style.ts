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
    height: 100vh;
    width: 100%;
    padding: 0.5rem 0.5rem;

    background-color: #CCC;

    @media screen and (max-width: 500px) {
        height: 40vh;
    }
`;

export const PhotosContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2``;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const Image = styled.img`
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    width: 255px;
    height: 265px;

    &:hover {
        -webkit-transform: scale(1.3);
	    transform: scale(1.3);
    }

    @media screen and (max-width: 500px) {
        width: 90px;
        height: 95px;
    }
`;

export const Caption = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;

export const FigureImage = styled.figure`
    position: relative;
    overflow: hidden;

    &:hover ${Caption} {
        opacity: 1;
    }

    &:hover ${Image} {
        opacity: 0.3;
    }
`;
