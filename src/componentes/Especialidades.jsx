import { 
    EspecialidadeContainer, 
    OverlayContainer, 
    TitleContainer, 
    TopicsTexts, 
    CardGrid,
    Card,    
    ButtonContainer
} 
    from "../styles/Especialidade.style";
import banner from '../assets/banner-especialidades.png';

import imagem1 from '../assets/Especialidades/imagem1.png';
import imagem2 from '../assets/Especialidades/imagem2.png';
import imagem3 from '../assets/Especialidades/imagem3.png';
import imagem4 from '../assets/Especialidades/imagem4.png';
import imagem5 from '../assets/Especialidades/imagem5.png';
import imagem6 from '../assets/Especialidades/imagem6.png';
import { FaWhatsapp } from 'react-icons/fa';


const Especialidades = () => {
    const containerStyle = {
        backgroundImage: `url(${banner})`,
        opacity: 0.5,

    };

    return (
        <EspecialidadeContainer >
            <OverlayContainer style={containerStyle}/>
                <TitleContainer>
                    <h3>Especialidades</h3>
                    <p>Cuidados Personalizados para Sua Beleza</p>
                </TitleContainer>
                
                <TopicsTexts>
                    <div>
                        <p>
                            Harmonização Facial
                        </p>
                    </div>
                    
                    <div>
                       <p>
                            Ultrassom Micro Focado
                        </p> 
                    </div>
                    <div>
                       <p>
                            Tratamentos Faciais
                        </p> 
                    </div>
                    
                    <div>
                       <p>
                            Harmonização Corporal
                        </p>  
                    </div>
                   
                </TopicsTexts>

                <CardGrid>

                    <Card>
                        <img src={imagem1} alt="imagem 1" />
                        <h3>Rino Modelação</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Card>

                    <Card>
                        <img src={imagem2} alt="imagem 2" />
                        <h3>Preenchimento da Mandíbula</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Card>

                    <Card>
                        <img src={imagem3}alt="imagem 3" />
                        <h3>Preenchimento Labial</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Card>

                    <Card>
                        <img src={imagem4} alt="imagem 4" />
                        <h3>Linha Marionete</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Card>

                    <Card>
                        <img src={imagem5} alt="imagem 5" />
                        <h3>Bigode Chinês</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Card>

                    <Card>
                        <img src={imagem6} alt="imagem 6" />
                        <h3>Preenchimento Olheiras</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Card>
 
                </CardGrid>

                <ButtonContainer>
                    <FaWhatsapp size={18} />
                    Agendar Consulta
              </ButtonContainer>

        </EspecialidadeContainer>
    );
};

export default Especialidades;
