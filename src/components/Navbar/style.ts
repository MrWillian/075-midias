import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background #000;
    height: 6.5vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 10rem;
`;

export const NavLinkContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    z-index: 10;
`;

export const Logo = styled.button`
    border: none;
    cursor: pointer;
    align-items: center;
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
`;