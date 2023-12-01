import { Parallax } from "react-parallax";
import mybanner from "../assets/banner-parallax.png";
import { ContatoContainer, ContentContainer } from "../styles/Contato.style";

export const Contato = () => {
    return(
        <ContatoContainer>
            <Parallax strength={350} bgImage={mybanner}>
                <ContentContainer>
                   
                </ContentContainer>
            </Parallax>
        </ContatoContainer>
    );
};


export default Contato;