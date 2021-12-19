import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.body};
  width: 1400px;
  max-width: 100%;
  height: 7vh;
  padding: 0 50px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  margin: 0 auto;
  /* display: none; */

  H1 {
    font-weight: 400;
    font-size: 20px;
    margin: 0 1rem;
    color: #000;
  }

  @media (max-width: 400px){
    display: none;
  }
`;
