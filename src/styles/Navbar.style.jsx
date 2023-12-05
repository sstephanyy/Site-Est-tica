import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100vw; /* Use 100% of the viewport width */
    height: ${(props) => (props.nav ? "100vh" : "69px")};
    display: flex;
    padding: 0px 10px;
    align-items: center;
    position: fixed;
    top: ${(props) => (props.isScrolled ? "0" : "2.4rem")};
    background-color: white;
    z-index: 1000;
    transition: top 0.3s ease; 

    @media (min-width: 700px) { 
        height: 69px;

    } 
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) { 
        padding: 0px 20px;
        /* position: absolute;
        left: 30px;
        top: 50px; */
    }


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

    @media (max-width: 700px) { 
        display: none; 
    }
`;


export const IconsMenu = styled.div`
    padding: 0px 20px;

    .bars-icon{
        position: relative;
        top: -26px;
        right: 0px;
    }
    /* position: absolute;
    right: 30px;
    top: 50px; */


    @media (min-width: 700px) {
        display: none;
    }

`;

export const MobileMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 159px;
    right: 0;
    left: 0;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavBarLinkMobile = styled.li`
    margin: 10px;
    width: 90%;
    padding: 0px 10px;
    font-family: var(--font-fraunces);
    color: white;
    background-color: var(--brown-100);
    font-size: 40px;
    font-weight: 400;

`;

export const NavbarHeader = styled.div`
    position: absolute;
    top: 50px; 
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px;


`;