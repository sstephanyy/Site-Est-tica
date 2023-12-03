import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from '../assets/anastasialogo.png';
import { Nav, NavLink, NavList, NavbarContainer } from "../styles/Navbar.style";

export const NavBar = () => {

    const navlinks = [
        {
            id: 1,
            link: "Home",
        },
        { 
            id: 2,
            link: "Especialidades",
        },
        {
            id: 3,
            link: "Sobre Nós",
        },
        {
            id: 4,
            link: "Nossa Equipe",
        }, 
        {
            id: 5,
            link: "Blog",
        },
        {
            id: 6,
            link: "Contato",
        }
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    // If the page is scrolled (isScrolled is true), the navbar will have a top value of 0, making it fixed. Otherwise, it will have a top value based on the height of your header.
    const handleScroll = () => {
        const scrollTop = window.scrollY;

        // Update the state based on the scroll position
        setIsScrolled(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component is unmounted (occurs when a component is removed from the DOM)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array means the effect runs once after the initial render

    return (
        <NavbarContainer isScrolled={isScrolled}>
            <div className="container">
                <Nav>
                    <div>
                        <img src={logo} width={111} height={50} style={{ cursor: "pointer" }} />
                    </div>
                    <NavList>

                        {navlinks.map(({ id, link }) => (
                            <NavLink key={id}>
                                <ScrollLink to={link} smooth duration={500}>
                                    {link}
                                </ScrollLink>
                            </NavLink>
                        ))}
                    </NavList>
                </Nav>
            </div>
        </NavbarContainer>
    );
};
