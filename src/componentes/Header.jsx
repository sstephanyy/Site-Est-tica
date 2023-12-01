import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { AddressContainer, HeaderContainer, IconsContainer } from "../styles/Header.style";

const Header = () => {
    const links = [
      {
        id: 1,
        child: 
        <FaFacebookF size={15} color="#694A38" />,
        href: "facebook",
      },
      {
        id: 2,
        child: 
        <FaInstagram size={15} color="#694A38"/>,
        href: "instagram",
      },
      {
        id: 1,
        child: 
        <RiTiktokLine size={15} color="#694A38"/>,
        href: "tiktok",
      },
      {
        id: 1,
        child: 
        <FaWhatsapp size={15} color="#694A38"/>,
        href: "facebook",
      },
    ];
  
    return (
      <HeaderContainer>
        <div className="container">
            <AddressContainer>
                <LuMapPin color="#694A38"/>
                <p>Rua B 001, Centro de São Paulo</p>
            </AddressContainer>
            <IconsContainer>
            {links.map(({ id, child, href }) => (
                <li key={id}>
                {child}
                </li>
            ))}
            </IconsContainer>
        </div>
        
      </HeaderContainer>
    );
  };
  
  export default Header;