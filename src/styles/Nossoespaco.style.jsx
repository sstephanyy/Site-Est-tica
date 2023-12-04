import styled from "styled-components";
import GlobalStyles from "./globalStyles.jsx";


export const NossoEspacoContainer = styled.div`
    width: 100%;
    height: 638px;
    background-color:#faf7f7 !important;

    @media (max-width: 768px) {
        padding-top: 320px;
        height: 980px;
        padding-left: 30px;
        padding-right: 30px;

  }
`;

export const WrapperContainer = styled.div`
    background-color: white;
    border-radius: 6px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    > h3 {
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 400;
        font-size: 30px;
        margin-bottom: 10px;
    }

    > p {
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        color: var(--brown-200);
    }

    @media (max-width: 768px) {
        text-align: center;

  }

    
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    gap: 7px;   
`;

export const LeftArrows = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #f7f7f7;
    border-radius: 50%;
    margin-right: -56px;
    z-index: 1;
    width: 40px;
    height: 40px;

    &:hover {
    background-color: #e6c8b8; /* Add a different color on hover if desired */
  }
    
    > svg {
        fill:  var(--brown-200);
    }
`;


export const RightArrows = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #f7f7f7;
    border-radius: 50%;
    margin-left: -56px;
    z-index: 1;
    width: 40px;
    height: 40px;

    &:hover {
    background-color: #e6c8b8; /* Add a different color on hover if desired */
  }
    
    > svg {
        fill:  var(--brown-200);
    }
`;