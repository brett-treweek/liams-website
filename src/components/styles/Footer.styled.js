import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.body};
  width: 900px;
  max-width: 90vw;
  padding: 0 50px;
  margin: 0 auto;

  .link {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
    text-decoration: none;
    transition: all 0.3s ease-in;
    margin-bottom: 20px;
  }

  .link:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  #copyright, p {
    font-size: 14px;
    opacity: 0.7;
  }

`;
