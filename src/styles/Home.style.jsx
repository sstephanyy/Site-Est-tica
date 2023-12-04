import styled from "styled-components";
import GlobalStyles from "./globalStyles.jsx";

export const HomeContainer = styled.div`
  height: ${(props) => (props.isMobile ? "800px" : "639px")};

  background-color: var(--beige-100);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) { 
       padding: 0px 20px;

    }
`;

export const HomeContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  
  > div {
    position: relative;
    z-index: 1; /* Keep the content above the image */
    max-width: 600px;
  }

 
  > img {
    /* margin-left: -290px;
    margin-bottom: 15px; */
    position: absolute;
    bottom: -12rem;
    right: -570px;
    
  }


  
  > div > h3 {
    width: 700px;
    font-family: 'Fraunces', serif;
    color: var(--brown-100);
    font-size: 46px;
    font-weight: 400;
    margin-bottom: 17px;
  }

  > div > p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: var(--brown-200); 
    font-weight: 400;
    max-width: 600px;
    margin-bottom: 17px;
  }

  > div > div > button {
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
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.1);
    }
  }

  //is used to target smaller screens or viewports.
  @media (max-width: 768px) { 
    display: flex;
    flex-direction: column; 
    align-items: center;

    > div{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center; /* Center the text within the div */
    }

    > div > h3 {
      max-width: 75%;
      font-size: 34px;
      margin-top: 100px;
    }

    > div > p {
      max-width: 70%;
      font-size: 16px;
      line-height: 1; /* or line-height: normal; */

    }

    > img {
      position: static;
      max-width: 1300px; 
      margin-right: 340px;
    }

    > div > div > button{
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

`;