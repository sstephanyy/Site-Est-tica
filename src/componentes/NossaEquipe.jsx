import { NossaEquipeContainer, OverlayContainer, CardContainer, Card, TitleContainer, ButtonContainer} from "../styles/NossaEquipe.style";
import banner from "../assets/banner-especialidades.png"
import { FaWhatsapp } from 'react-icons/fa';

import pessoa1 from "../assets/NossaEquipe/pessoa1.png";
import pessoa2 from "../assets/NossaEquipe/pessoa2.png";
import pessoa3 from "../assets/NossaEquipe/pessoa3.png";
import pessoa4 from "../assets/NossaEquipe/pessoa4.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const NossaEquipe = () => {

    const containerStyle = {
        backgroundImage: `url(${banner})`,
        opacity: 0.5,

    };

    const cardContainer = useRef();
    const timeline = useRef();


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            timeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: cardContainer.current,
                    scrub: true,
                    start: "top 480px",
                    end: "bottom 760px"
                }
            })
            .fromTo("#card1", {
                opacity: 0
            }, {
                opacity: 1

            
            })
            .fromTo("#card2", {
                opacity: 0,

            }, {
                opacity: 1,
            })
            .fromTo("#card3", {
                opacity: 0
            }, {
                opacity: 1
            })
            .fromTo("#card4", {
                opacity: 0
            }, {
                opacity: 1
            
            })
           
        }, cardContainer);

        return () => {
            gsap.killTweensOf(cardContainer.current); // unmounted to avoid impacting performance
        };
    }, []);

    return( 
        <NossaEquipeContainer id="Nossa Equipe">
            <OverlayContainer style={containerStyle}/>
            <div className="container">
            <TitleContainer>
                    <h3>Nossa Equipe</h3>
                    <p>Conheça a nossa equipe de especialistas em estética, unindo talentos para realçar sua beleza.</p>
                </TitleContainer>
                <CardContainer ref={cardContainer}>
                    <Card id="card1">
                        <img src={pessoa1} alt="Card Image" />
                        <h3>Dra Anastásia</h3>
                        <p className="crm-p">
                            CRM 0001-000
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. <a href="">Saiba Mais</a>
                        </p>
                    </Card>
                    <Card id="card2">
                        <img src={pessoa2} alt="Card Image" />
                        <h3>Dra Júlia</h3>
                        <p className="crm-p">
                        CRM 0001-000
                        </p>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. <a href="">Saiba Mais</a>
                        </p>
                    </Card>
                    <Card id="card3">
                        <img src={pessoa3} alt="Card Image" />
                        <h3>Dr Fernando</h3>
                        <p className="crm-p">
                        CRM 0001-000
                        </p>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. <a href="">Saiba Mais</a>
                        </p>
                    </Card>
                    <Card id="card4">
                        <img src={pessoa4} alt="Card Image" />
                        <h3>Dra Pricila</h3>
                        <p className="crm-p">
                        CRM 0001-000
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
                        <a href="">Saiba Mais</a>
                        </p>
                    </Card>
                
                </CardContainer>
            

            </div>
           
            <ButtonContainer>
                        <FaWhatsapp size={18} />
                        Agendar Consulta
                </ButtonContainer>  

        </NossaEquipeContainer>
    );
};

export default NossaEquipe;