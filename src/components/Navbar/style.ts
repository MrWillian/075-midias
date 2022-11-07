import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const Nav = styled.nav`
    background #000;
    height: 3.6rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 10rem;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        height: auto;
    }

    @media screen and (max-width: 900px) {
        padding: 0.4rem 5rem;
    }

    @media screen and (max-width: 700px) {
        padding: 0.4rem 3rem;
    }

    @media screen and (max-width: 600px) {
        padding: 0.4rem 2rem;
    }

    @media screen and (max-width: 550px) {
        padding: 0.4rem 0.5rem;
    }
`;

export const NavLinkContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        height: auto;
        width: 100%;
    }
`;

export const Logo = styled.button`
    border: none;
    cursor: pointer;
    align-items: center;
    background-color: #000;

    @media screen and (max-width: 500px) {
       display: none;
    }
`;

export const LogoImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 0.8rem;

    &.active {
        color: #C75104;
    }

    @media screen and (max-width: 500px) {
        border-top: 0.5px solid rgba(255, 255, 255, 0.555);
        padding: 20px 0;
        width: 100%;
        justify-content: center;
    }

    @media screen and (max-width: 750px) {
        font-size: 0.6rem;
    }
`;

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80px;
    border: 1px solid #C75104;
    border-radius: 1rem;
    cursor: pointer;
    background-color: #C75104;

    font-size: 0.9rem;
    color: #FFF;
    text-decoration: none;

    @media screen and (max-width: 750px) {
        font-size: 0.7rem;
        width: 60px;
    }
`;

export const btnSignout = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80px;
    border: 1px solid #C75104;
    border-radius: 1rem;
    cursor: pointer;
    background-color: #C75104;

    font-size: 0.9rem;
    color: #FFF;
    text-decoration: none;

    @media screen and (max-width: 750px) {
        font-size: 0.7rem;
        width: 70px;
    }
    
    @media screen and (max-width: 600px) {
        width: 60px;
    }
`;

export const btnMenuControl = styled.button`
    display: none;
    position: absolute;
    right: 30px;
    top: 7px; 
    padding: 5px;
    color: #CCC;
    font-size: 18px;
    background-color: #000;
    border: 0px;
    
    @media screen and (max-width: 500px) {
        display: block;
    }
`;
