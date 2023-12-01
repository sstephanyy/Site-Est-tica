import styled, { keyframes } from "styled-components";
import GlobalStyles from "./GlobalStyles";


export const ProvaSocialContainer = styled.div`
    width: 100%;
    height: 619px;
    margin-top: 14rem;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > h3{
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 400;
        font-size: 30px;
        margin-bottom: 8px;
    }

    > p{
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        color: var(--brown-200); 

    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    gap: 5rem;

`;

export const DotsContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-left: -385px;
    margin-top: 15px;
    width: 100%;
    gap: 17px;

    .dot {
    display: block;
    background-color: #E6C8B8;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        background-color: #694A38A6;

    }
}
.active {
    background-color: #694A38A6;
}

`;

export const Arrows = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #f7f7f7;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
    background-color: #e6c8b8; /* Add a different color on hover if desired */
  }
    
    > svg {
        fill:  var(--brown-200);
    }
    
`;



