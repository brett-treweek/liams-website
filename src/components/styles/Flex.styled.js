import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: ${({jc}) => jc};

    p{
        font-size: 1.5rem;
        text-align: justify;
    }

    @media (max-width: 400px){
        flex-direction: column;
    }

`