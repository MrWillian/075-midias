import styled from "styled-components";
import { AiOutlineWhatsApp, AiFillInstagram, AiOutlineFacebook, AiFillYoutube } from 'react-icons/ai';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 50vh;
    width: 100%;

    background-color: #CCC;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 400px) {
        padding: 40px 20px;
    }
`;

export const Title = styled.h2`
    text-transform: uppercase;

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
`;

export const Line = styled.hr`
    width: 440px;
    height: 2px;
    border: solid 2px #C75104;
    margin: 0 0 0.7rem 0;

    @media screen and (max-width: 500px) {
        width: 400px;
    }

    @media screen and (max-width: 450px) {
        width: 350px;
    }
    
    @media screen and (max-width: 380px) {
        width: 250px;
    }
`;

export const Content = styled.text`
    font-size: 1rem;
    margin: 0.5rem 0;

    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 400px) {
        margin: 0.5rem 0;
    }
`;

export const SocialButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 0.3rem 0;
`;

export const SocialButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    cursor: pointer; 
    color: inherit;
    text-decoration: inherit;

    @media screen and (max-width: 400px) {
        width: 30px;
        height: 30px;
    }
`;

export const WhatsAppIcon = styled(AiOutlineWhatsApp)`
    width: 25px;
    height: 25px;

    @media screen and (max-width: 400px) {
        width: 20px;
        height: 20px;
    }
`;

export const InstagramIcon = styled(AiFillInstagram)`
    width: 25px;
    height: 25px;

    @media screen and (max-width: 400px) {
        width: 20px;
        height: 20px;
    }
`;

export const FacebookIcon = styled(AiOutlineFacebook)`
    width: 25px;
    height: 25px;

    @media screen and (max-width: 400px) {
        width: 20px;
        height: 20px;
    }
`;

export const YoutubeIcon = styled(AiFillYoutube)`
    width: 25px;
    height: 25px;

    @media screen and (max-width: 400px) {
        width: 20px;
        height: 20px;
    }
`;
