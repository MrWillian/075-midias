import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding: 0.5rem 0.5rem;

    background-color: #CCC;
`;

export const Title = styled.h2``;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 5px;
`;

export const FigureImage = styled.figure`
    overflow: hidden;
`;

export const Image = styled.img`
    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;

    &:hover {
        -webkit-transform: scale(1.3);
	    transform: scale(1.3);
    }
`;