import React, { useEffect, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import pessoa from '../assets/banner-pessoa.png';
import { HomeContainer, HomeContent } from '../styles/Home.style';
import homePessoa from "../assets/pessoa1.png";

const Home = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize); //When the window is resized, the handleResize function is called, updating the isMobile state based on the new window width.

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
      <HomeContainer id="Home" isMobile={isMobile}>
        <HomeContent className='container'>
          <div>
            <h3>
              Unindo tecnologia e ciência a serviço da <strong>sua beleza</strong>
            </h3>
            <p>
              Protocolos exclusivos com equipamentos avançados de alta tecnologia e profissionais capacitados, entregando resultados excelentes em tratamentos corporais e faciais.
            </p>
            <div >
              <button>
                <FaWhatsapp size={18} />
                Agendar Consulta
              </button>
            </div>
          </div>
          <img src={isMobile ? homePessoa : pessoa} alt="uma mulher" />
        </HomeContent>
        
        {isMobile ? null : (
          <div style={{ paddingBottom: "110px" }}>
          </div>
        )}
      </HomeContainer>
      
    );
};

export default Home;
