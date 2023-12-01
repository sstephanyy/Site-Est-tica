import { NossaEquipeContainer, OverlayContainer, CardContainer, Card, TitleContainer, } from "../styles/NossaEquipe.style";
import banner from "../assets/banner-especialidades.png"
import { ButtonContainer } from "../styles/Especialidade.style";
import { FaWhatsapp } from 'react-icons/fa';

import pessoa1 from "../assets/NossaEquipe/pessoa1.png";
import pessoa2 from "../assets/NossaEquipe/pessoa2.png";
import pessoa3 from "../assets/NossaEquipe/pessoa3.png";
import pessoa4 from "../assets/NossaEquipe/pessoa4.png";


const NossaEquipe = () => {

    const containerStyle = {
        backgroundImage: `url(${banner})`,
        opacity: 0.5,

    };

    return(
        <NossaEquipeContainer >
            <OverlayContainer style={containerStyle}/>
            <div className="container">
            <TitleContainer>
                    <h3>Nossa Equipe</h3>
                    <p>Conheça a nossa equipe de especialistas em estética, unindo talentos para realçar sua beleza.</p>
                </TitleContainer>
                <CardContainer>
                    <Card>
                        <img src={pessoa1} alt="Card Image" />
                        <h3>Dra Anastásia</h3>
                        <p className="crm-p">
                            CRM 0001-000
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. <a href="">Saiba Mais</a>
                        </p>
                    </Card>
                    <Card>
                        <img src={pessoa2} alt="Card Image" />
                        <h3>Dra Júlia</h3>
                        <p className="crm-p">
                        CRM 0001-000
                        </p>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. <a href="">Saiba Mais</a>
                        </p>
                    </Card>
                    <Card>
                        <img src={pessoa3} alt="Card Image" />
                        <h3>Dr Fernando</h3>
                        <p className="crm-p">
                        CRM 0001-000
                        </p>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. <a href="">Saiba Mais</a>
                        </p>
                    </Card>
                    <Card>
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

                <ButtonContainer>
                    <FaWhatsapp size={18} />
                    Agendar Consulta
              </ButtonContainer>

            </div>
           

        </NossaEquipeContainer>
    );
};

export default NossaEquipe;