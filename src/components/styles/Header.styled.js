import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 1200px;
  max-width: 90%;
  /* height: 50vh; */
  margin: 50px auto;
  /* border-radius: 15px; */
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); */


  h1 {
    text-align: center;
    font-size: 70px;
    font-weight: 300;
    margin-top: 0;
  }

  p {
    /* width: 375px; */
    text-align: center;
  }

  @media (max-width: 400px){
    h1{
      font-size: 55px;
    }  
    p{
      font-size: 20px;
    }
  }
`;
