import styled from "styled-components";

export const ContatoFormContainer = styled.div`
    width: 100%;
    height: 20rem;

    @media (max-width: 768px) {
        position: relative;
        bottom: 130px;
  }
    
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const SubTopics = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    padding-bottom: 20px; 
    margin-bottom: 20px;

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

export const AllContent = styled.div`
     position: relative;
     bottom: 330px;
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.5) 50%);
     border-radius: 7px;
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
     display: flex;
     width: 63%;
     justify-content: space-between;
     align-content: center;
     padding: 35px 15px;

     h3 {
            font-family: 'Fraunces', serif;
            color: var(--brown-100);
            font-weight: 400;
            font-size: 30px;
    }

     .left-container{
        margin-top: 9px;
        
     }

     @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 400px;

        .left-container{
            padding-bottom: 23px;
        }
  }

`;

export const RightContainer = styled.div`

    > h3 {
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 400;
        font-size: 30px;

    }

    > p{
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        color: var(--brown-200); 
        margin-bottom: 12px;

    }
    
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 70%;   

        .contato{
            display: flex;
            gap: 8px;
            justify-content: space-between;
            
            > input{
                width: 350px;
            }
            
        }

        button {
            background-color: #E6C8B8;
            padding: 10px;
            border: none;
            border-radius: 15px;
            color: white;
            font-size: 15px;
            font-family: 'Poppins', sans-serif;
            transition: transform 0.3s ease-in-out;

            &:hover {
            transform: scale(1.1);
            background-color: var(--brown-100);
            }
        }

        @media (max-width: 768px) {
            max-width: 95%;   

           .contato{
            display: block;
            width: 100%; 

           }
        }
    }

    input,
    textarea
    {
        padding: 15px 10px;
        background-color:#F9EADB;
        border-radius: 0.375rem; 
        color: var(--brown-200);
        outline: none;
        margin-bottom: 1rem; 
        border: none;
        opacity: 0.8; 
        box-shadow: inset 0 0 0 1px rgba(105, 74, 56, 0.1);
        font-size: 15px;
        font-family: 'Poppins', sans-serif;

    }


`;

export const StyledSelect = styled.select`
        padding: 15px 10px;
        width: 100%;
        background-color:#F9EADB;
        border-radius: 0.375rem; 
        color: var(--brown-200);
        outline: none;
        margin-bottom: 1rem; 
        border: none;
        opacity: 0.8; 
        box-shadow: inset 0 0 0 1px rgba(105, 74, 56, 0.1);
        font-size: 15px;
`;