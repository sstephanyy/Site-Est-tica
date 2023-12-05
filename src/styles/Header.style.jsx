import styled from "styled-components";
import GlobalStyles from "./globalStyles.jsx";

export const HeaderContainer = styled.header`
    height: 2.4rem;
    background-color: var(--beige-300);
    display: flex;
    align-items:  center;
    justify-content: center;
   

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 700px) { 
        padding: 0px 10px;
    }
`;

export const AddressContainer = styled.div`
  display: flex;
  gap: 10px; 
  font-family: var(--font-fraunces);
  font-size: var(--font-text-secondary);
  font-weight: 500;
  color: #694A38;

  @media (max-width: 700px) { 
      font-size: 13px;
    }

`;

export const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;  
    cursor: pointer;

    > li {
      background-color: rgba(250, 247, 247, 0.3); 
      border-radius: 50%;
      display: flex;
      align-items: center;
      padding: 4px;
    }

`;


