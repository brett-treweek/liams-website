import styled from "styled-components";

export const StyledNav = styled.nav`


  background-color: ${({ theme }) => theme.colors.body};
  width: 1400px;
  max-width: 100%;
  height: 7vh;
  padding: 0 50px;
  margin: 0 auto;

  H1 {
    font-weight: 400;
    font-size: 30px;
    margin: 0 1rem;
    color: #1976d2;
  }

  @media (max-width: 400px){
    /* display: none; */
  }
`;
