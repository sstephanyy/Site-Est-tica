import styled from "styled-components";

export const NossaEquipeContainer = styled.div`
    width: 100%;
    height: 43rem;
    background-color: #f7f7f7;
    position: relative;

`;

export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    padding: 20px;
    position: relative;
    z-index: 6;
    height: 400px; /* Adjust the height as needed */

`;

export const Card = styled.div`
    background-color: #f0f0f0;
    border-radius: 3px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    > img{
        width: 110px;
        height: 110px;
    }

    > h3 {
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 600;
        font-size: 17px;
        margin-top: 13px;
        margin-bottom: 13px;
    }
    .crm-p{
        margin-bottom: 10px;
        margin-top: 10px;
    }
    > p {
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
        color: var(--brown-200);

        > a {
            color: var(--brown-200);
            display: block;
        }
    }
`;
export const TitleContainer = styled.div`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 6;
    

    > h3 {
        font-family: 'Fraunces', serif;
        color: var(--brown-100);
        font-weight: 400;
        font-size: 46px;
        margin-bottom: 19px;
    }

    > p {
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        color: var(--brown-200);
    }
`;
