import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 69px;
    display: flex;
    align-items: center;
    position: fixed;
    top: ${(props) => (props.isScrolled ? "0" : "2.4rem")};
    background-color: white;
    z-index: 1000;
    transition: top 0.3s ease; 
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 26px;
`;

export const NavLink = styled.li`
    font-family: var(--font-fraunces);
    color: var(--brown-100);
    font-size: 16px;
    font-weight: 400;
    position: relative;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 1px;
        background-color: var(--brown-100);
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;
