import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  max-width: 100%;
  height: 7vh;
  padding: 0 50px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  /* margin: 0 0 5rem 0; */

  H1 {
    font-weight: 200;
    font-size: 25px;
    margin: 0 1rem;
    color: #fff;
  }
`;
