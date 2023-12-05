import styled from "styled-components";

export const EspecialidadeContainer = styled.div`
    height: 82rem;
    background-color: #f7f7f7;
    position: relative;

    @media (max-width: 768px) {
        height: 180rem;
    }

`;

export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 130px;
    z-index: 6;
    

    > h3 {
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 400;
        font-size: 46px;
        margin-bottom: 10px;
    }

    > p {
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        color: var(--brown-200);
    }
`;

export const TopicsTexts = styled.div`
    position: relative;
    z-index: 6;
    width: 100%;
    max-width:63rem;
    margin-right: auto;
    margin-left: auto;
    gap: 10px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap; /* Allow flex items to wrap to the next row */

    justify-content: space-between;
   
    > div{
        cursor: pointer;
        padding: 15px 30px;
        background-color: #f7f7f7;
        border-radius: 5px;
        font-weight: 400;

        &:hover {
            background-color: #E6C8B8;
        }

        > p{
            font-size: 15px;
            font-family: 'Poppins', sans-serif;
            color: var(--brown-100);    
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 33px;
    }

   
`;

export const CardGrid = styled.div`
    max-width: 69rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 38px;
    position: relative;
    z-index: 6;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Single column for small screens */
    }
`;

export const Card = styled.div`
  border-radius: 8px;
  padding: 55px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

    > img {
        cursor: pointer;
        width: 140px;
        height: 140px;
        margin-bottom: 12px;
    }

    h3{
        cursor: pointer;
        font-family: 'Fraunces', serif;
        color: #694A38;
        font-size: 17px;
        font-weight: 600;

    }

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        color: var(--brown-200);
        text-align: center;
        padding: 20px;
       
    }
`;

export const ButtonContainer = styled.button`
    position: relative;
    z-index: 6;
    max-width: 69rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    gap: 5px;
    padding: 12px 19px;
    border-radius: 35px;
    border: none;
    font-family: 'Poppins', sans-serif;
    color:  var(--brown-100);
    cursor: pointer;
    font-weight: 500;
    background-color: #E6C8B8;
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.1);
    }
`; 