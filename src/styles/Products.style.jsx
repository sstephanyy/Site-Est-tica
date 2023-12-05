import styled from "styled-components";
import GlobalStyles from "./globalStyles.jsx";


export const ProductContainer  = styled.div`
    height: 6.2rem;
    display: flex;
    justify-content: center;
    margin-top: -75px;


    @media (max-width: 768px) {
        margin-top: -75px;
        height: 9rem;
    }
`; 

export const CardsContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 280px );
      grid-template-rows: 210px; 
      gap: 20px;

      .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 4px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(5px); 
        transform: translateY(100%);
        opacity: 0;

        > svg {
            margin-bottom: 18px;
        }

        > h3{
            margin-bottom: 6px;
            font-family: 'Fraunces', serif;
            color: #694A38;
            font-size: 15px;
            font-weight: bold;
        } 

        > p {
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            color: var(--gray);
            text-align: center;
        }
    }

    
    @media (max-width: 768px) {
        grid-template-rows: 210px; 
        grid-template-columns: 280px; /* Display a single column on small screens */
    }

`;
