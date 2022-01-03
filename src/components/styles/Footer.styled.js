import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.body};
  width: 900px;
  max-width: 90%;
  height: 10vh;
  padding: 0 50px;
  margin: 0 auto;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
    text-decoration: none;
    transition: all 0.3s ease-in;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
