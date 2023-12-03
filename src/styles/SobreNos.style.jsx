import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

export const SobreNosContainer = styled.div`
    width: 100%;
    height: 688px;
    background-color:#faf7f7 !important;
    display: flex;
`;

export const InsiderContainer = styled.div`
    display: flex;
    align-items: center;

    > div{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        gap: 56px;
       

        > h3{
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 400;
        font-size: 30px;
        }
    }

    
`;

export const SubTopics = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    padding-bottom: 10px; 
    margin-bottom: 10px;

    &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 78%;
    height: 1px; 
    background-color: var(--beige-300); 
    }

    > svg {
        fill: var(--beige-300);
        display: flex;
        margin-bottom: 15px;
    }

`;

export const Description = styled.div`
    margin-left: 12px;

    > h4{
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 600;
        font-size: 17px;
        margin-bottom: 3px;
    }

    > p {
        font-size: 13px;
        font-family: 'Poppins', sans-serif;
        color: var(--brown-200);
        max-width: 73%;
    }
`;