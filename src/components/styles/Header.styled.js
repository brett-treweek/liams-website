import styled from "styled-components";

export const Image = styled.img`
  width: 500px;
  max-width: 40vw;
  `

export const StyledHeader = styled.header`
  width: 1200px;
  max-width: 90%;
  height: 100vh;
  margin: 50px auto;
  align-items: flex-start;
  /* border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); */


  h1 {
    text-align: center;
    font-size: 80px;
    font-weight: 500;
    margin: 0 0 60px 0;
  }

  h2 {
    text-align: center;
    font-size: 55px;
    font-weight: 400;
    margin: 0;
  }

  p {
    width: 500px;
    max-width: 90vw;
    text-align: justify;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.4s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.tertiary}
  }

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 40px;
    transition: all 0.4s ease;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    
  }

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
    text-decoration: none;
    transition: all 0.3s ease-in;
    margin: 20px auto;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: 400px){




    h1{
      font-size: 55px;
    } 
    h2 {
      font-size: 45px;
    } 
    p{
      font-size: 18px;
    }
    img {
      max-width: 90vw;
    }
  }
`;
