import { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import mybanner from '../assets/banner-parallax.png';
import { ContatoContainer, ContentContainer } from '../styles/Contato.style';

const Contato = () => {
  const [isMobileNavigation, setIsMobileNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileNavigation(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContatoContainer id="Contato">
      {isMobileNavigation ? (
        <ContentContainer>
          <img src={mybanner} alt="Banner" />
        </ContentContainer>
      ) : (
        <Parallax strength={350} bgImage={mybanner}>
          <ContentContainer>
          </ContentContainer>
        </Parallax>
      )}
    </ContatoContainer>
  );
};

export default Contato;
