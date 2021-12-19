import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 1000px;
  max-width: 90%;
  /* height: 50vh; */
  margin: 50px auto;
  /* border-radius: 15px; */
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); */


  h1 {
    text-align: center;
    font-size: 80px;
    font-weight: 400;
    margin: 0 0 60px 0;
  }

  h2 {
    text-align: center;
    font-size: 55px;
    font-weight: 400;
    margin: 0;
  }

  p {
    /* width: 440px; */
    max-width: 90vw;
    text-align: center;
  }

  @media (max-width: 400px){
    h1{
      font-size: 55px;
    } 
    h2 {
      font-size: 45px;
    } 
    p{
      font-size: 20px;
    }
  }
`;
