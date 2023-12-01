import React, { useLayoutEffect, useRef } from "react";
import { CardsContainer, ProductContainer } from "../styles/Products.style";
import smilling from "../assets/smiling.svg";
import botox from '../assets/botox.svg';
import slim from '../assets/slim-body.svg';
import scan from '../assets/scan-1.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Products = () => {

    const cardsContainerRef = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".card", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: cardsContainerRef.current,
                markers: true,
                start: "top 500px",
                end: "bottom 700px"
            }
        })
        return () => {
            gsap.killTweensOf(".card"); //unmounted pra n pesar a pagina
        }
    }, []);

    return(
        <ProductContainer>
            <CardsContainer ref={cardsContainerRef}>
                <div className="card" >
                    <svg width="32" height="32">
                        <image href={botox} width="100%" height="100%"/>
                    </svg>
                    <h3>Harmonização Facial</h3>
                    <p>Um conjunto de procedimentos estéticos para equilibrar e realçar os traços faciais.</p> 
                </div>
                <div className="card">
                    <svg  width="32" height="32">
                        <image href={smilling} width="100%" height="100%" />
                    </svg>
                    <h3>Tratamentos Faciais</h3>
                    <p>Abordagens estéticas visando proporções equilibradas e contornos harmônicos no corpo.</p> 
                </div>
                <div className="card">
                    <svg width="32" height="32" >
                        <image href={scan} width="100%" height="100%" />
                    </svg>
                    <h3>Ultrassom Micro Focado</h3>
                    <p>Diversas técnicas para melhorar a saúde e aparência da pele do rosto.</p> 
                </div>
                <div className="card">
                    <svg width="32" height="32">
                        <image href={slim} width="100%" height="100%"  />
                    </svg>
                    <h3>Harmonização Corporal</h3>
                    <p>Tecnologia que utiliza ultrassom para estimular colágeno e melhorar a firmeza da pele.</p> 
                </div>
                
            </CardsContainer>
        </ProductContainer>
    );
};

export default Products;