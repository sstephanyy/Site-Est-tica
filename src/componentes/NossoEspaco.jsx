import { NossoEspacoContainer, WrapperContainer, TitleContainer, ImageContainer, LeftArrows, RightArrows} from "../styles/Nossoespaco.style"
import lugar1 from "../assets/Nosso-Espaco/lugar1.png";
import lugar2 from "../assets/Nosso-Espaco/lugar2.jpg";
import lugar3 from "../assets/Nosso-Espaco/lugar3.jpg";
import lugar4 from "../assets/Nosso-Espaco/lugar4.jpg";
import lugar5 from "../assets/Nosso-Espaco/lugar5.jpg";
import { useState, useEffect  } from "react";
import { motion, AnimatePresence } from "framer-motion";


const images = [lugar1, lugar2, lugar3, lugar4, lugar5];

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

const NossoEsapaco = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState(images);
  const [direction, setDirection] = useState('left');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const handleNext = () => {
    setDirection("right");
    setCarouselImages((prevState) => {
      const [lugar1, ...images] = prevState;
      return [...images, lugar1];
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

  useEffect(() => {
    // Set an interval to call handleNext every 5000 milliseconds (5 seconds)
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    // Cleanup the interval to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // Run the effect once when the component mounts


    return (
        <NossoEspacoContainer>
            <WrapperContainer className= "container">
                <TitleContainer>
                    <h3>Nosso Espaço</h3>
                    <p>Criamos um ambiente onde homens e mulheres podem experimentar tratamentos e serviços de qualidade</p>
                </TitleContainer>

                <ImageContainer>
                    <LeftArrows onClick={handlePrevious} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 96 960 960"
                            width="20"
                        >
                            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                        </svg>          
                    </LeftArrows>
      {/* to get the first three images from the images array and renders them as initial images. */}
            {carouselImages.slice(currentIndex, isMobile ? currentIndex + 1 : currentIndex + 4).map((image, index) => (
                <AnimatePresence>
                    <motion.img 
                    key={index}
                    src={image}
                    className={currentIndex === index ? "active" : ""}
                    variants={slideVariants}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    style={{ width: "280px", height: "280px", borderRadius: "7px"
                }} 

                    />
                
                
                </AnimatePresence>
        
        ))}
        <RightArrows onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
          </RightArrows>
        
       
      </ImageContainer>

      {/* <DotsContainer>
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </DotsContainer> */}

            </WrapperContainer>
        </NossoEspacoContainer>
    );
};

export default NossoEsapaco;