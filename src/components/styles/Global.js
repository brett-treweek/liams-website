import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');

* {
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body{
    background: ${({theme}) => theme.colors.body};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 1.15em;
}

p{
    line-height: 1.5;
}

img{
    max-width: 90vw;
}

`
export default GlobalStyles