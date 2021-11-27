import styled from "styled-components"

export const StyledHeader =  styled.header`
    background-color: ${({theme}) => theme.colors.header};
    max-width: 100%;
    height: 6vh;
    padding: 0 50px;
    margin: 0;

    H1 {
        font-weight: 200;
        font-size: 25px;
        margin: 0 1rem;
    }
`

