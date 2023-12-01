// Home.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import pessoa from '../assets/banner-pessoa.png';
import { HomeContainer, HomeContent } from '../styles/Home.style';

const Home = () => {
    return (
      <HomeContainer>
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
          <img src={pessoa} alt="uma mulher" />
        </HomeContent>
      </HomeContainer>
      
    );
};

export default Home;
