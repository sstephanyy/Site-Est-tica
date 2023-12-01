import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Arrows, ProvaSocialContainer, TextContainer, DotsContainer } from "../styles/ProvaSocial.style";

import imagem1 from "../assets/antes-e-depois/olhos.png";
import imagem2 from "../assets/antes-e-depois/2.png";
import imagem3 from "../assets/antes-e-depois/3.png";
import imagem4 from "../assets/antes-e-depois/4.png";
import imagem5 from "../assets/antes-e-depois/5.png";
import imagem6 from "../assets/antes-e-depois/6.png";
import imagem7 from "../assets/antes-e-depois/7.png";
import imagem8 from "../assets/antes-e-depois/8.png";
import { ImageContainer } from "../styles/Nossoespaco.style";


const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8];

const slideVariants = {
  //this sets the opacity of the image to 0 and places it at the right side of the container.
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};



export const ProvaSocial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState(images);
  const [direction, setDirection] = useState('left');


  const handleNext = () => {
    setDirection("right");
    setCarouselImages((prevState) => {
      const [imagem1, ...images] = prevState;
      return [...images, imagem1];
    });
  };
  // this does the same as the handleNext function, but this time in reverse order. This allows us to go back to images.
  const handlePrevious = () => {
    setDirection("left");
    setCarouselImages((prevState) => {
      const imagesCopy = [...prevState];
      const lastImage = imagesCopy.pop(); // Remove a última imagem
      imagesCopy.unshift(lastImage); // Adiciona a última imagem no início
      return imagesCopy;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ProvaSocialContainer>
      <TextContainer>
        <h3>Sem corte e sem cirurgia</h3>
        <p>Confira alguns resultados da clínica Anastásia Estética Avançada</p>
      </TextContainer>
      <ImageContainer>
          <Arrows onClick={handlePrevious} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>          
        </Arrows>
      {/* to get the first three images from the images array and renders them as initial images. */}
      {carouselImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
        <AnimatePresence>
              <motion.img 
              key={index}
              src={image}
              className={currentIndex === index ? "active" : ""}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
            />
           
          
        </AnimatePresence>
        
        ))}
        <Arrows onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
          </Arrows>
        
       
      </ImageContainer>

      <DotsContainer>
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </DotsContainer>

    </ProvaSocialContainer>
  );
};
